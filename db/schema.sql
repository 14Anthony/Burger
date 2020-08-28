DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE Table
(
    id INT NOT NULL
    AUTO_INCREMENT,
      burgerName VARCHAR
    (30),
      devoured BOOLEAN DEFAULT true,
      PRIMARY KEY
    (id);
  )