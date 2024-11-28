<?php
// Error reporting settings for displaying all errors (only for development environment, not for production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS settings
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle OPTIONS request for preflight
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON data
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        echo json_encode(["status" => "error", "message" => "Invalid JSON data"]);
        exit();
    }

    // Log the request
    if (!file_exists('request_log.txt')) {
        file_put_contents('request_log.txt', ''); // Create file if it doesn't exist
    }

    $logEntry = date('Y-m-d H:i:s') . " - " . json_encode($data) . "\n";
    file_put_contents('request_log.txt', $logEntry, FILE_APPEND);

    echo json_encode(["status" => "success", "message" => "Request logged successfully"]);
} else {
    // If request method is not valid
    echo json_encode(["status" => "error", "message" => "Invalid request method: " . $_SERVER["REQUEST_METHOD"]]);
}
?>
