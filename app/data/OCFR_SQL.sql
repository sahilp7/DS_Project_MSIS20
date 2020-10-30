CREATE DATABASE ocfr;

USE ocfr;

CREATE TABLE members
(
member_id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
is_active VARCHAR(5) NOT NULL,
gender VARCHAR(10) NOT NULL,
date_of_birth DATE NOT NULL,
mobile_number VARCHAR(14) NOT NULL,
work_number VARCHAR(14),
street_address VARCHAR(64) NOT NULL,
city VARCHAR(15) NOT NULL,
state VARCHAR(2) NOT NULL,
zip_code VARCHAR(10) NOT NULL,
email_address VARCHAR(20) NOT NULL,
station VARCHAR(5) NOT NULL,
chief VARCHAR(5) NOT NULL,
position_title VARCHAR(20),
radio VARCHAR(10) NOT NULL
);

CREATE TABLE certifications
(
certification_id INT PRIMARY KEY AUTO_INCREMENT,
certification_name VARCHAR(64) NOT NULL,
agency VARCHAR(64) NOT NULL,
standard_expiry INT
);

CREATE TABLE member_certification
(
member_id INT references members,
certification_id INT references certifications,
date_granted DATE,
date_expired DATE,
PRIMARY KEY(certification_id, member_id)
);

INSERT INTO members
VALUES (1,'Kathryn','Pride','Yes','Female','1992-09-20','(707) 555-1234','(707) 555-2345','1123 Xavier School Drive','Watkinsville','GA','30677','kpride@oconee.org','All','Yes','Chief','A-1'),
(2,'Piotr','Rasputin','Yes','Male','1992-08-21','(206) 555-9876',NULL,'A31 Mother Russia Road','Seattle','WA','98133','piotr@oconee.org',8,'No','Firefighter',841),
(3,'Warren','Worthington III','Yes','Male','1990-06-10','(706) 555-3945',NULL,'1140 Experiment Station Rd','Watkinsville','GA','30677','warren@oconee.org',1,'No','Firefighter',122);

INSERT INTO certifications
VALUES (1,'CPR','CPR for Healthcare Providers/American Heart Association',2),
(2,'CPR','CPR for the Professional Rescuer/American Red Cross',2),
(3,'Firefighter I','Athens Technical College',3),
(4,'Firefighter I','Ivy Technical College',3),
(5,'POST','Georgia POST Academy',5),
(6,'Firefighter II','Athens Technical College',3),
(7,'Extrication','Ivy Technical College',4),
(8,'EMT-Adv','EMT Academy',4),
(9,'Due Regard','DR University',5),
(10,'Paramedic','Paramedics US',6),
(11,'HAZMAT','Georgia HAZMAT',6);

INSERT INTO member_certification
VALUES (1,6,'2018-08-10','2020-08-10'),
(1,1,'2017-07-10','2019-07-08'),
(1,7,NULL,NULL),
(1,11,NULL,'2020-02-03'),
(2,8,NULL,'2020-09-05'),
(2,2,'2019-07-6','2021-07-06'),
(2,9,'2019-10-10','2021-10-23'),
(3,10,NULL,'2019-09-14'),
(3,2,NULL,'2020-07-16'),
(3,9,NULL,'2019-10-30'),
(3,6,NULL,'2020-08-30');

select * from members;
select * from certifications;
select * from member_certification;

SELECT first_name, last_name, certification_name, date_expired
FROM members, member_certification, certifications
WHERE members.member_id = member_certification.member_id AND member_certification.certification_id = certifications.certification_id AND date_expired <= CURDATE();

SELECT first_name, last_name, station, radio
FROM members;

SELECT member_id, first_name, last_name
FROM members;

SELECT first_name, last_name, certification_name, date_granted, date_expired
FROM members, member_certification, certifications
WHERE members.member_id = member_certification.member_id AND member_certification.certification_id = certifications.certification_id
ORDER BY first_name;

SELECT members.member_id, certification_name, date_granted, date_expired
FROM members, member_certification, certifications
WHERE members.member_id = member_certification.member_id AND member_certification.certification_id = certifications.certification_id
AND members.member_id = 1;

drop table members;
drop table certifications;
drop table member_certification;