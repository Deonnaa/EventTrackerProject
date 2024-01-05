DROP DATABASE IF EXISTS habitdb;
CREATE DATABASE IF NOT EXISTS habitdb;

USE habitdb;

CREATE TABLE habit (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    frequency VARCHAR(50),
    status BOOLEAN DEFAULT TRUE
);


DROP USER IF EXISTS userhabit@localhost;
CREATE USER IF NOT EXISTS userhabit@localhost IDENTIFIED BY 'userhabit';

GRANT SELECT, INSERT, UPDATE, DELETE ON habitdb.* TO userhabit@localhost;

START TRANSACTION;

INSERT INTO habit (id, name, description, start_date, frequency, status)
    VALUES (1, 'Drink Water', '80oz', '2024-01-01', 'Daily', 1);

COMMIT;