DROP DATABASE if exists burgershop_db;

CREATE DATABASE IF NOT EXISTS burgershop_db;

USE burgershop_db;

CREATE TABLE burgers(
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);