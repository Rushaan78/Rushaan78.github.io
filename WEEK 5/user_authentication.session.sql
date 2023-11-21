CREATE DATABASE user_authentication;
 
USE user_authentication;

CREATE TABLE users_data (
  userID INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

SELECT * FROM users_data;
