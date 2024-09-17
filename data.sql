DROP DATABASE IF EXISTS blog;

CREATE DATABASE blog;
use blog;

CREATE TABLE categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    phone VARCHAR(10),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE blogs(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    content VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP(),
    userId INT NOT NULL,
    categoryId INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES users(id),
    CONSTRAINT fk_category FOREIGN KEY (categoryId) REFERENCES categories(id)
);

INSERT INTO users(full_name, email, Password, phone) VALUES
("Raj Saytode", "raj@gmail.com", "raj", 9090909090),
("Kuldeep Singh Bhati", "kuldeep@gmail.com", "kuldeep", 8080808080),
("Shubham Shejul", "shejul@gmail.com", "shejul", 7070707070),
("Suyog Shejul", "suyog@gmail.com", "suyog", 6060606060),
("Nishant Deshmukh", "nishant@gmail.com", "nishant", 1234567890);
