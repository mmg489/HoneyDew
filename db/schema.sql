CREATE DATABASE honeydew_db;
USE honeydew_db;

-- TABLE1

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    acct_name VARCHAR(255) NOT NULL,
    secret_word VARCHAR(255) NOT NULL,
    userone_name VARCHAR(255) NOT NULL,
    usertwo_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- TABLE2

CREATE TABLE foods (
    id int NOT NULL AUTO_INCREMENT,
    meal_name VARCHAR(255) NOT NULL,
    swipe int NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
);

-- TABLE3

CREATE TABLE activities (
    id int NOT NULL AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    swipe int NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
);