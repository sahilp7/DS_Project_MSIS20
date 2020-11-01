<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'UPDATE members SET first_name = ? ,last_name = ?,is_active = ?,gender = ?,date_of_birth = ?,mobile_number = ?,work_number = ?,street_address = ?,city = ?,state = ?,zip_code = ?,email_address = ?,station = ?,chief = ?,position_title = ?,radio = ?
  WHERE member_id =?');

$stmt->execute([
 $_POST['first_name'],
 $_POST['last_name'],
 $_POST['is_active'],
 $_POST['gender'],
 $_POST['date_of_birth'],
 $_POST['mobile_number'],
 $_POST['work_number'],
 $_POST['street_address'],
 $_POST['city'],
 $_POST['state'],
 $_POST['zip_code'],
 $_POST['email_address'],
 $_POST['station'],
 $_POST['chief'],
 $_POST['position_title'],
 $_POST['radio'],
 $_POST['member_id']
 ]);

$member_id = $_POST['member_id'];
//
header('HTTP/1.1 303 See Other');
header('Location: ../records/?member_id=' .$member_id);
