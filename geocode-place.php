<?php
/**
 * Google Place Details Proxy
 * Secure proxy that gets coordinates from place_id
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

// Get and validate place_id
$placeId = isset($_GET['place_id']) ? sanitizeInput($_GET['place_id'], 300) : '';

if (empty($placeId)) {
    sendError('No place_id provided', 400);
}

// Validate place_id format (basic validation)
if (!preg_match('/^[A-Za-z0-9_-]+$/', $placeId)) {
    sendError('Invalid place_id format', 400);
}

// Use Place Details API (New) to get coordinates
$url = 'https://places.googleapis.com/v1/places/' . urlencode($placeId);

// Use cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'X-Goog-Api-Key: ' . $apiKey,
    'X-Goog-FieldMask: location'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    $errorMsg = curl_error($ch);
    curl_close($ch);
    error_log("Google Place Details cURL error: $errorMsg");
    sendError('Unable to complete request', 502);
}

curl_close($ch);

if ($httpCode !== 200) {
    error_log("Google Place Details API error: HTTP $httpCode");
    sendError('Place not found', 404);
}

// Parse and validate response
$data = json_decode($response, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    error_log("Invalid JSON response from Google Place Details API");
    sendError('Invalid response from service', 502);
}

if (isset($data['location'])) {
    sendSuccess([
        'location' => [
            'lat' => $data['location']['latitude'],
            'lng' => $data['location']['longitude']
        ]
    ]);
} else {
    error_log("No location found in Place Details response for place_id: $placeId");
    sendError('Location not found', 404);
}
?>
