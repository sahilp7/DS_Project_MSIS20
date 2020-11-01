<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'UPDATE certifications SET certification_name = ? ,agency = ?,standard_expiry = ?
  WHERE certification_id =?');

$stmt->execute([
 $_POST['certification_name'],
 $_POST['agency'],
 $_POST['standard_expiry'],
 $_POST['certification_id']
 ]);

$certification_id = $_POST['certification_id'];
//
header('HTTP/1.1 303 See Other');
header('Location: ../records/?certification_id=' .$certification_id);
