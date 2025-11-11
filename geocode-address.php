<?php
/**
 * Google Geocoding API Proxy
 * Secure proxy that gets coordinates from address
 */

require_once __DIR__ . '/config.php';

// Set security headers
setSecurityHeaders();

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Validate referer (optional - prevents direct access from other domains)
if (!validateReferer()) {
    error_log('Invalid referer: ' . ($_SERVER['HTTP_REFERER'] ?? 'none'));
    sendError('Access denied', 403);
}

// Rate limiting
$rateLimiter = new RateLimiter();
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

if (!$rateLimiter->checkLimit($clientIp)) {
    sendError('Rate limit exceeded. Please try again later.', 429);
}

// Get API key from environment
$apiKey = env('GOOGLE_API_KEY');
if (empty($apiKey)) {
    error_log('Google API key not configured');
    sendError('Service configuration error', 500);
}

// Get and validate query
$query = isset($_GET['query']) ? sanitizeInput($_GET['query'], 300) : '';

if (empty($query)) {
    sendError('No query provided', 400);
}

// Validate query is reasonable
if (strlen($query) < 3) {
    sendError('Query too short', 400);
}

// Add Toronto bounds if not already specified
if (stripos($query, 'toronto') === false && stripos($query, 'ontario') === false) {
    $query .= ', Toronto, Ontario, Canada';
}

// Use Geocoding API
$url = 'https://maps.googleapis.com/maps/api/geocode/json?' . http_build_query([
    'address' => $query,
    'bounds' => '43.465,-79.788|43.855,-79.115', // GTA bounds
    'key' => $apiKey,
    'region' => 'ca'
]);

// Use cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    $errorMsg = curl_error($ch);
    curl_close($ch);
    error_log("Google Geocoding API cURL error: $errorMsg");
    sendError('Unable to complete request', 502);
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    error_log("Google Geocoding API error: HTTP $httpCode");
    sendError('Service temporarily unavailable', 503);
}

// Parse and validate response
$data = json_decode($response, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    error_log("Invalid JSON response from Google Geocoding API");
    sendError('Invalid response from service', 502);
}

if ($data['status'] === 'OK' && !empty($data['results'])) {
    // Return the first result's location
    $location = $data['results'][0]['geometry']['location'];
    sendSuccess([
        'location' => [
            'lat' => $location['lat'],
            'lng' => $location['lng']
        ],
        'formatted_address' => $data['results'][0]['formatted_address']
    ]);
} else {
    $status = $data['status'] ?? 'UNKNOWN';
    error_log("Google Geocoding API status: $status for query: $query");
    sendError('No results found', 404);
}
?>
