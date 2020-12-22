DROP DATABASE IF EXISTS something_borrowed;

CREATE DATABASE something_borrowed;

USE something_borrowed;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE sellers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  description VARCHAR(300) NOT NULL
);

CREATE TABLE outfits (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(20) NOT NULL,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(300) NOT NULL,
  size VARCHAR(3) NOT NULL,
  price INT NOT NULL,
  available BOOLEAN NOT NULL,
  seller_id INT,
  FOREIGN KEY (seller_id) REFERENCES sellers(id) ON DELETE CASCADE
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(100),
  outfit_id INT,
  FOREIGN KEY (outfit_id) REFERENCES outfits(id) ON DELETE CASCADE
);

CREATE TABLE checkout (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  outfit_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (outfit_id) REFERENCES outfits(id) ON DELETE CASCADE
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
