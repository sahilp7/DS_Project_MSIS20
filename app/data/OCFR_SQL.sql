drop table members;
drop table certifications;
drop table member_certification;

CREATE TABLE members
(
member_id INT PRIMARY KEY,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
is_active VARCHAR(5) NOT NULL,
gender VARCHAR(10) NOT NULL,
date_of_birth DATE NOT NULL,
phone_number VARCHAR(14) NOT NULL,
street_address VARCHAR(20) NOT NULL,
city VARCHAR(15) NOT NULL,
state VARCHAR(2) NOT NULL,
zip_code VARCHAR(10) NOT NULL,
email_address VARCHAR(20) NOT NULL,
station INT NOT NULL,
chief VARCHAR(5) NOT NULL,
position_title VARCHAR(10)
);

CREATE TABLE certifications
(
certification_id INT PRIMARY KEY,
certification_name VARCHAR(64) NOT NULL,
agency VARCHAR(64) NOT NULL
);

CREATE TABLE member_certification
(
certification_id INT references certifications,
member_id INT references members,
date_granted DATE NOT NULL,
date_expired DATE NOT NULL,
PRIMARY KEY(certification_id, member_id)
);

INSERT INTO members
VALUES (1,'John','Krieger','Yes','Male','20-Sep-94','(924) 400-5100','123 East','Btown','IN','47406-4054','johkrieg@iu.edu',6,'No','Janitor');

INSERT INTO certifications
VALUES (1,'CPA','Certified Public Accountants Association');

INSERT INTO member_certification
VALUES (1,1,'20-Jun-99','12-Mar-21');

select * from members;
select * from certifications;
select * from member_certification;
