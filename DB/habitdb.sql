DROP DATABASE IF EXISTS habitdb;
CREATE DATABASE IF NOT EXISTS habitdb;

USE habitdb;

CREATE TABLE habit (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    frequency VARCHAR(50),
    completion_count INT DEFAULT 0,
    target_count INT,
    failure_count INT DEFAULT 0,
    last_reset DATE,
    enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP USER IF EXISTS userhabit@localhost;
CREATE USER IF NOT EXISTS userhabit@localhost IDENTIFIED BY 'userhabit';

GRANT SELECT, INSERT, UPDATE, DELETE ON habitdb.* TO userhabit@localhost;

START TRANSACTION;

INSERT INTO habit (name, description, start_date, frequency, enabled)
    VALUES 
    ('Drink Water', '80oz per day', '2024-01-01', 'Daily', TRUE),
    ('Morning Jog', 'Jog for 30 minutes', '2024-01-02', 'Daily', TRUE),
    ('Read Books', 'Read for 1 hour', '2024-01-03', 'Daily', TRUE),
    ('Meditate', 'Meditation for 15 minutes', '2024-01-04', 'Daily', TRUE),
    ('Learn a Language', 'Practice Spanish for 30 minutes', '2024-01-05', 'Daily', TRUE),
    ('Yoga', 'Morning yoga session', '2024-01-06', 'Weekly', TRUE),
    ('Plan Meals', 'Plan healthy meals for the week', '2024-01-07', 'Weekly', TRUE),
    ('Call Family', 'Call family members', '2024-01-08', 'Weekly', TRUE),
    ('Clean House', 'General house cleaning', '2024-01-09', 'Weekly', TRUE),
    ('Guitar Practice', 'Practice guitar for 1 hour', '2024-01-10', 'Daily', TRUE);

COMMIT;