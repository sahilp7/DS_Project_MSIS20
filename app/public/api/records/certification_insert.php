<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'INSERT INTO certifications (certification_name,agency,standard_expiry)
VALUES (?, ?, ?)'
);

$stmt->execute([
 $_POST['certification_name'],
 $_POST['agency'],
 $_POST['standard_expiry']
 ]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../records/certifications.php/?certification_id='.$pk);
