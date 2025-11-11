<?php
/**
 * Google Places Autocomplete Proxy
 * Secure proxy that protects API key and implements rate limiting
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

// Get and validate input
$query = isset($_GET['input']) ? sanitizeInput($_GET['input'], 200) : '';

if (empty($query)) {
    sendError('No query provided', 400);
}

// Validate query is reasonable
if (strlen($query) < 2) {
    sendError('Query too short', 400);
}

// Use new Places API Autocomplete
$url = 'https://places.googleapis.com/v1/places:autocomplete';

$postData = json_encode([
    'input' => $query,
    'locationBias' => [
        'circle' => [
            'center' => [
                'latitude' => 43.6532,
                'longitude' => -79.3832
            ],
            'radius' => 50000.0
        ]
    ],
    'includedRegionCodes' => ['CA']
]);

// Use cURL for better control
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-Goog-Api-Key: ' . $apiKey
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    $errorMsg = curl_error($ch);
    curl_close($ch);
    error_log("Google Places API cURL error: $errorMsg");
    sendError('Unable to complete request', 502);
}

curl_close($ch);

if ($httpCode !== 200) {
    error_log("Google Places API error: HTTP $httpCode");
    sendError('Service temporarily unavailable', 503);
}

// Validate response is valid JSON
$data = json_decode($response, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    error_log("Invalid JSON response from Google Places API");
    sendError('Invalid response from service', 502);
}

// Return the response
sendSuccess($data);
?>
