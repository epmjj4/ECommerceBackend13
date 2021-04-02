DROP DATABASE if exists burgershop_db;

CREATE DATABASE IF NOT EXISTS burgershop_db;

USE burgershop_db;

CREATE TABLE burgers(
id INTEGER NOT NULL AUTO_INCREMENT NOT
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY(id)
);