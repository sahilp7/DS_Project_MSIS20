<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'DELETE FROM members WHERE member_id = ?;'
);

$stmt->execute([
 $_POST['member_id'],
]);
