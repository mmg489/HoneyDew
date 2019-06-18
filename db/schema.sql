DROP DATABASE IF EXISTS honeydew;
CREATE DATABASE honeydew;
USE honeydew;

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

CREATE TABLE user_likes (
    id int NOT NULL AUTO_INCREMENT,
    uniqueurl VARCHAR(36) NOT NULL,
    liked_foods VARCHAR(255),
    liked_activities VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE foods (
    id int NOT NULL AUTO_INCREMENT,
    uniqueurl VARCHAR(36) NOT NULL,
    meal_name VARCHAR(255) NOT NULL,
    meal_img VARCHAR (255) NOT NULL,
    swipe int NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE activities (
    id int NOT NULL AUTO_INCREMENT,
    uniqueurl VARCHAR(36) NOT NULL,
    event_name VARCHAR(255) NOT NULL,
    event_img VARCHAR (255) NOT NULL,
    swipe int NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TRIGGER before_insert_users
  BEFORE INSERT ON users
  FOR EACH ROW
  SET new.uniqueurl = uuid();