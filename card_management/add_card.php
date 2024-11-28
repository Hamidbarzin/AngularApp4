<?php
// CORS headers
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Handle OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection details
$servername = "localhost";
$username = "root";
$password = "Barzin5758";
$dbname = "card_database";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    // Get incoming data
    $data = json_decode(file_get_contents('php://input'), true);

    // Log incoming data for debugging
    error_log("Received data: " . print_r($data, true));

    // Validate incoming data
    if (!isset($data['suit']) || !isset($data['name']) || !isset($data['rank'])) {
        throw new Exception("Required fields are missing: suit, name, rank");
    }

    // Assign variables
    $suit = $data['suit'];
    $name = $data['name'];
    $rank = $data['rank'];
    $history = $data['history'] ?? '';
    $value = $data['value'] ?? '';

    // Prepare and execute query
    $stmt = $conn->prepare("INSERT INTO cards (suit, name, rank, history, value) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param(
        "ssiss",
        $suit,
        $name,
        $rank,
        $history,
        $value
    );

    if (!$stmt->execute()) {
        throw new Exception("Error executing query: " . $stmt->error);
    }

    // Send success response
    echo json_encode([
        'status' => 'success',
        'message' => 'Card successfully added',
        'id' => $conn->insert_id
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
} finally {
    $conn->close();
}
?>
