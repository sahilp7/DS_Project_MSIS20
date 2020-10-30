<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'INSERT INTO member_certification (member_id, certification_id, date_granted, date_expired)
VALUES (?, ?, ?,?);'
);

$stmt->execute([
 $_POST['member_id'],
 $_POST['certification_id'],
 $_POST['date_granted'],
 $_POST['date_expired']
 ]);


 $certification_id = $db->lastInsertId();
 $member_id = $db->lastInsertId();

 header('HTTP/1.1 303 See Other');
 header('Location: ../records/?certification_id='.$certification_id);
 header('Location: ../records/?member_id='.$member_id);
