<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");

include 'db.php'; // Database connection

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    try {
        $sql = "SELECT * FROM cards";
        $result = $conn->query($sql);

        if (!$result) {
            throw new Exception("Error executing query: " . $conn->error);
        }

        $cards = [];
        while ($row = $result->fetch_assoc()) {
            $cards[] = $row;
        }

        echo json_encode($cards);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => $e->getMessage()
        ]);
    } finally {
        $conn->close();
    }
} elseif ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
} else {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request method: " . $_SERVER["REQUEST_METHOD"]
    ]);
}
?>
