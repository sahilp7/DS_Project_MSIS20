<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'SELECT member_id FROM members');

$stmt->execute();

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$memb = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $memb;
