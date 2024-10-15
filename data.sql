DROP DATABASE IF EXISTS blog;

CREATE DATABASE blog;
use blog;

CREATE TABLE categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL UNIQUE,
    description VARCHAR(255)
);

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    phone VARCHAR(10),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE blogs(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL UNIQUE,
    content VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP(),
    userId INT NOT NULL,
    categoryId INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES users(id),
    CONSTRAINT fk_category FOREIGN KEY (categoryId) REFERENCES categories(id)
);

--------------------------------------------------------------------------------

INSERT INTO users(full_name, email, Password, phone) VALUES
("Raj Saytode", "raj@gmail.com", "raj", 9090909090),
("Kuldeep Singh Bhati", "kuldeep@gmail.com", "kuldeep", 8080808080),
("Shubham Shejul", "shejul@gmail.com", "shejul", 7070707070),
("Suyog Shejul", "suyog@gmail.com", "suyog", 6060606060),
("Nishant Deshmukh", "nishant@gmail.com", "nishant", 1234567890);

--------------------------------------------------------------------------------

-- Blogs

SELECT b.id, b.title, u.full_name, b.categoryId, b.create_time
FROM Blogs b JOIN users u
ON b.userId = u.id
WHERE u.id = ?;

SELECT b.id, b.title, u.full_name, b.categoryId, b.create_time
FROM Blogs b JOIN users u
ON b.userId = u.id
WHERE LOWER(u.full_name) LIKE ?;

SELECT id, title, content, create_time, userId, categoryId FROM blogs
WHERE LOWER(title) LIKE "%n%"
LIMIT 5;

SELECT id, title, content, create_time, userId, categoryId FROM blogs
ORDER BY id DESC
LIMIT ? OFFSET ?;

SELECT b.id, b.title, b.content, b.create_time, u.full_name FROM blogs b JOIN users u
ON u.id = b.userId
ORDER BY id DESC
LIMIT 5;

SELECT b.id, b.title, b.create_time, u.full_name as author, c.title as category
FROM blogs b JOIN users u
ON u.id = b.userId
JOIN categories c
ON c.id = b.categoryId
ORDER BY b.id DESC
LIMIT ? OFFSET ?;

SELECT id, title, content, create_time, userId, categoryId FROM blogs
WHERE id = ?
ORDER BY id DESC
LIMIT 1;

INSERT INTO blogs (title, content, userId, categoryId) VALUES
(?, ?, ?, ?);

INSERT INTO blogs (title, content, userId, categoryId) VALUES
("AgriTech Startups", "With over 70% of India’s rural population still being dependent on agriculture for their livelihood, the need for innovation in the sector has always remained high.",
 1, 5);

INSERT INTO blogs (title, content, userId, categoryId) VALUES
("Big Fund", "While India doesn't need to learn much from China—as both systems are different—the viability of a big fund for technology could be looked at by a public-private partnership as well",
 2, 6);

INSERT INTO blogs (title, content, userId, categoryId) VALUES
("Generative AI", "While shopping for a hat online, you add cowboy hats in the site search query, but search results show children's T-shirts with a cowboy on them.",
 1, 7);

INSERT INTO blogs (title, content, userId, categoryId) VALUES
("Budget 2024", "The 2024 Union Budget has introduced noteworthy changes to capital gains taxation, signalling a significant recalibration for High-Net-Worth Individuals (HNIs) in their investment approach.",
 1, 9);

INSERT INTO blogs (title, content, userId, categoryId) VALUES
("Impact Investing", "An underrated investment opportunity for family offices and high-net-worth individuals",
 3, 8);

INSERT INTO blogs (title, content, userId, categoryId) VALUES
("Whatever", "need a change", 1, 2);

INSERT INTO blogs (title, content, userId, categoryId) VALUES
("Netflix", "With Netflix releasing its global engagement report last month bringing much-needed transparency to the world of OTT, we finally see a world that is significantly different from the empire of big screens.",
 1, 2);


UPDATE blogs SET
title = "Netflix", content = "With Netflix releasing its global engagement report last month bringing much-needed transparency to the world of OTT, we finally see a world that is significantly different from the empire of big screens."
WHERE id = 6;


DELETE FROM blogs WHERE id = ?;



-- Categories

INSERT INTO categories (title, description) VALUES
(?, ?);

INSERT INTO categories (title, description) VALUES
("Science", "Related to science");

INSERT INTO categories (title, description) VALUES
("Education", "Related to education");

INSERT INTO categories (title, description) VALUES
("News", "Related to news");

INSERT INTO categories (title, description) VALUES
("Technology", "Related to technology");

INSERT INTO categories (title, description) VALUES
("Politics", "Related to politics");


SELECT id, title, description FROM Categories
ORDER BY title;