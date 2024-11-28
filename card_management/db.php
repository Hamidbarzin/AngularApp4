<?php
$servername = "localhost";
$username = "root";
$password = "Barzin5758"; // Your database password
$dbname = "card_database"; // Correct database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Connection failed: " . $conn->connect_error
    ]));
}

// Set charset for supporting UTF-8 data
$conn->set_charset("utf8mb4");
?>
