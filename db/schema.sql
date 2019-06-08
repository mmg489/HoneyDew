CREATE DATABASE honeydew_db;
USE honeydew_db;

TABLE1

CREATE TABLE users (
    userid int NOT NULL AUTO_INCREMENT,
    acct_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (userid)
);

TABLE2

CREATE TABLE foods (
    foodid int NOT NULL AUTO_INCREMENT,
    meal_name VARCHAR(255) NOT NULL,
    swipe int,
    PRIMARY KEY (foodid),
);

TABLE3

CREATE TABLE activities (
    activities_id int NOT NULL AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    swipe int,
    PRIMARY KEY (activities_id),
);