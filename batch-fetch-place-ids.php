#!/usr/bin/env php
<?php
/**
 * Batch fetch Place IDs for venues
 * This is a CLI script that bypasses the proxy security checks
 * Run with: php batch-fetch-place-ids.php
 */

// Load configuration
require_once __DIR__ . '/config.php';

// Verify running from CLI
if (php_sapi_name() !== 'cli') {
    die("This script must be run from command line\n");
}

// Get API key
$apiKey = env('GOOGLE_API_KEY');
if (empty($apiKey)) {
    die("ERROR: GOOGLE_API_KEY not configured\n");
}

// Configuration
define('RATE_LIMIT_DELAY', 36); // seconds (100 requests/hour)
define('BATCH_SAVE_INTERVAL', 10);

/**
 * Parse JavaScript data file
 */
function parseJsDataFile($filepath) {
    $content = file_get_contents($filepath);

    // Find JSON array: const varName = [...];
    if (preg_match('/=\s*(\[.*\])\s*;/s', $content, $matches)) {
        return json_decode($matches[1], true);
    }

    throw new Exception("Could not parse $filepath");
}

/**
 * Save JavaScript data file
 */
function saveJsDataFile($filepath, $data, $varName) {
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    // Write to temp file first, then atomic rename
    $tempFile = $filepath . '.tmp';
    file_put_contents($tempFile, "const $varName = $json;\n");
    rename($tempFile, $filepath);
}

/**
 * Get Place ID using Google Geocoding API
 * The Geocoding API also returns place_id in results
 */
function getPlaceId($name, $address, $apiKey, &$attempt = 1) {
    $query = "$name $address";

    $url = 'https://maps.googleapis.com/maps/api/geocode/json?' . http_build_query([
        'address' => $query,
        'bounds' => '43.465,-79.788|43.855,-79.115', // GTA bounds
        'key' => $apiKey,
        'region' => 'ca'
    ]);

    for ($i = 0; $i < 3; $i++) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        if (curl_errno($ch)) {
            $error = curl_error($ch);
            curl_close($ch);
            echo "  ❌ cURL error: $error\n";
            if ($i < 2) {
                sleep(5);
                continue;
            }
            return null;
        }

        curl_close($ch);

        if ($httpCode === 429) {
            echo "  ⏳ Rate limit hit, waiting 60 seconds...\n";
            sleep(60);
            continue;
        }

        if ($httpCode !== 200) {
            echo "  ❌ HTTP $httpCode\n";
            if ($i < 2) {
                sleep(5);
                continue;
            }
            return null;
        }

        $data = json_decode($response, true);

        if ($data['status'] === 'OK' && !empty($data['results'])) {
            $result = $data['results'][0];
            if (isset($result['place_id'])) {
                return $result['place_id'];
            }
        } elseif ($data['status'] === 'ZERO_RESULTS') {
            echo "  ⚠️  No results found\n";
            return null;
        } elseif ($data['status'] === 'OVER_QUERY_LIMIT') {
            echo "  ⏳ Query limit exceeded, waiting 60 seconds...\n";
            sleep(60);
            continue;
        } else {
            echo "  ❌ API Status: {$data['status']}\n";
            return null;
        }
    }

    return null;
}

/**
 * Process venues
 */
function processVenues($filepath, $varName, $venueType, $apiKey) {
    echo "\n" . str_repeat('=', 60) . "\n";
    echo "Processing $venueType\n";
    echo str_repeat('=', 60) . "\n\n";

    // Work on a temporary copy to avoid interfering with live site
    $workFile = $filepath . '.work';
    copy($filepath, $workFile);

    echo "Loading $workFile (working copy)...\n";
    $data = parseJsDataFile($workFile);
    echo "Found " . count($data) . " $venueType\n\n";

    // Count existing Place IDs
    $existingCount = 0;
    foreach ($data as $venue) {
        if (!empty($venue['placeId'])) {
            $existingCount++;
        }
    }

    if ($existingCount > 0) {
        echo "✓ $existingCount venues already have Place IDs\n\n";
    }

    $updatedCount = 0;
    $skippedCount = 0;
    $failedCount = 0;

    foreach ($data as $i => &$venue) {
        $name = $venue['name'] ?? 'Unknown';
        $address = $venue['address'] ?? 'Unknown';
        $index = $i + 1;
        $total = count($data);

        // Skip if already has Place ID
        if (!empty($venue['placeId'])) {
            echo "[$index/$total] ⏭️  Skipping $name (already has Place ID)\n";
            $skippedCount++;
            continue;
        }

        echo "[$index/$total] 🔍 Fetching Place ID for: $name\n";
        echo "           Address: $address\n";

        $placeId = getPlaceId($name, $address, $apiKey);

        if ($placeId) {
            $venue['placeId'] = $placeId;
            $updatedCount++;
            echo "           ✓ Found: $placeId\n\n";
        } else {
            $failedCount++;
            echo "           ✗ Failed to find Place ID\n\n";
        }

        // Save progress periodically to working file
        if ($updatedCount > 0 && $updatedCount % BATCH_SAVE_INTERVAL === 0) {
            echo "💾 Saving progress to working file ($updatedCount new Place IDs)...\n";
            saveJsDataFile($workFile, $data, $varName);
            echo "✓ Progress saved\n\n";
        }

        // Rate limiting
        if ($index < $total) {
            echo "⏳ Waiting " . RATE_LIMIT_DELAY . "s (rate limiting)...\n\n";
            sleep(RATE_LIMIT_DELAY);
        }
    }

    // Save to working file
    echo "💾 Saving final results to working file...\n";
    saveJsDataFile($workFile, $data, $varName);

    // Now atomically replace the production file
    echo "💾 Updating production file...\n";
    rename($workFile, $filepath);
    echo "✓ Production file updated\n";

    echo "\n" . str_repeat('=', 60) . "\n";
    echo "$venueType Summary:\n";
    echo "  Total venues: " . count($data) . "\n";
    echo "  Already had Place IDs: $skippedCount\n";
    echo "  Newly added Place IDs: $updatedCount\n";
    echo "  Failed: $failedCount\n";
    echo "  Final total with Place IDs: " . ($skippedCount + $updatedCount) . "\n";
    echo str_repeat('=', 60) . "\n\n";

    return $skippedCount + $updatedCount;
}

/**
 * Main
 */
function main() {
    global $argv;

    $baseDir = '/var/www/html/hometurf';

    echo "\n" . str_repeat('=', 60) . "\n";
    echo "Google Place ID Batch Fetcher for HomeTurf\n";
    echo str_repeat('=', 60) . "\n";
    echo "Rate limit: " . RATE_LIMIT_DELAY . "s between requests\n";
    echo "Progress saved every " . BATCH_SAVE_INTERVAL . " venues\n";
    echo str_repeat('=', 60) . "\n";

    // Parse command line arguments
    $dataset = $argv[1] ?? null;

    if (!in_array($dataset, ['childcare', 'schools', 'both', null])) {
        echo "\nUsage: php batch-fetch-place-ids.php [childcare|schools|both]\n\n";
        exit(1);
    }

    if ($dataset === null) {
        echo "\nWhich dataset would you like to process?\n";
        echo "  1. Childcare centers only\n";
        echo "  2. Schools only\n";
        echo "  3. Both (childcare first, then schools)\n\n";
        echo "Enter choice (1-3): ";

        $choice = trim(fgets(STDIN));

        switch ($choice) {
            case '1':
                $dataset = 'childcare';
                break;
            case '2':
                $dataset = 'schools';
                break;
            case '3':
                $dataset = 'both';
                break;
            default:
                $dataset = null;
        }

        if ($dataset === null) {
            echo "Invalid choice. Exiting.\n";
            exit(1);
        }
    }

    $apiKey = env('GOOGLE_API_KEY');
    $totalProcessed = 0;

    try {
        if (in_array($dataset, ['childcare', 'both'])) {
            $file = "$baseDir/data-childcare.js";
            $count = processVenues($file, 'childcareData', 'Childcare Centers', $apiKey);
            $totalProcessed += $count;
        }

        if (in_array($dataset, ['schools', 'both'])) {
            $file = "$baseDir/data-schools.js";
            $count = processVenues($file, 'schoolsData', 'Schools', $apiKey);
            $totalProcessed += $count;
        }

        echo "\n" . str_repeat('=', 60) . "\n";
        echo "✓ ALL DONE!\n";
        echo "Total venues with Place IDs: $totalProcessed\n";
        echo str_repeat('=', 60) . "\n\n";

    } catch (Exception $e) {
        echo "\n\n❌ Error: " . $e->getMessage() . "\n";
        exit(1);
    }
}

// Run
main();
