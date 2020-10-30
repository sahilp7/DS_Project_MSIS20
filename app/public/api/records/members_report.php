<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = "SELECT first_name, last_name, station, radio, email_address
FROM members";

$vars = [];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$exp_cert = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($exp_cert, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
