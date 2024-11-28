<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
include 'db.php';

// Handle OPTIONS requests for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    // Get incoming data
    $data = json_decode(file_get_contents('php://input'), true);

    // Log incoming data for debugging
    error_log("Received data for edit: " . print_r($data, true));

    // Validate required fields
    if (!isset($data['id']) || !isset($data['suit']) || !isset($data['name']) || !isset($data['rank'])) {
        throw new Exception('Missing required fields: id, suit, name, rank');
    }

    // Assign variables
    $id = intval($data['id']);
    $suit = trim($data['suit']);
    $name = trim($data['name']);
    $rank = intval($data['rank']);
    $history = isset($data['history']) ? trim($data['history']) : '';
    $value = isset($data['value']) ? trim($data['value']) : '';

    // Validate data
    if ($id <= 0 || empty($suit) || empty($name) || $rank <= 0) {
        throw new Exception('Invalid data provided');
    }

    // Prepare query
    $stmt = $conn->prepare("UPDATE cards SET suit = ?, name = ?, rank = ?, history = ?, value = ? WHERE id = ?");
    $stmt->bind_param("ssissi", $suit, $name, $rank, $history, $value, $id);

    // Execute query
    if (!$stmt->execute()) {
        throw new Exception("Query execution failed: " . $stmt->error);
    }

    // Check affected rows
    if ($stmt->affected_rows > 0) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Card updated successfully',
            'data' => $data
        ]);
    } else {
        throw new Exception('No changes made or card not found');
    }

    $stmt->close();

} catch (Exception $e) {
    // Send error response
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
} finally {
    // Close connection
    if (isset($conn)) {
        $conn->close();
    }
}
?>
