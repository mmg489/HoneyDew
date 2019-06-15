DROP DATABASE IF EXISTS honeydew_db;
CREATE DATABASE honeydew_db;
USE honeydew_db;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    uniqueurl VARCHAR(36) NOT NULL,
    acct_name VARCHAR(255) NOT NULL,
    couple_name VARCHAR(255) NOT NULL,
    secret_word VARCHAR(255) NOT NULL,
    userone_name VARCHAR(255) NOT NULL,
    usertwo_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE foods (
    id int NOT NULL AUTO_INCREMENT,
    meal_name VARCHAR(255) NOT NULL,
    meal_img VARCHAR (255) NOT NULL,
    swipe int NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE activities (
    id int NOT NULL AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_img VARCHAR (255) NOT NULL,
    swipe int NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);