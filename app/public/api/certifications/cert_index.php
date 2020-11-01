<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['certification_id'])) {
  $stmt = $db->prepare(
    'SELECT * FROM member_certification
    WHERE certification_id = ?;'
  );
  $stmt->execute([$_GET['certification_id']]);
} else {
  $stmt = $db->prepare('SELECT * from member_certification;');
  $stmt->execute();
}
$people = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($people, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
