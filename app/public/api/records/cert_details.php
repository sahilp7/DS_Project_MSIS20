<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = "SELECT certification_name, CONCAT(members.first_name,' ', members.last_name) as 'Member_Name', date_granted, date_expired
FROM members, member_certification, certifications
WHERE members.member_id = member_certification.member_id AND member_certification.certification_id = certifications.certification_id
ORDER BY certification_name";

$vars = [];

if (isset($_GET['member_id'])) {
  // This is an example of a parameterized query
  $sql = "SELECT certification_name, CONCAT(members.first_name,' ', members.last_name) as 'Member_Name', date_granted, date_expired
  FROM members, member_certification, certifications
  WHERE members.member_id = member_certification.member_id AND member_certification.certification_id = certifications.certification_id
  ORDER BY certification_name";
  $vars = [ $_GET['member_id'] ];
  }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$memb = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $memb;
