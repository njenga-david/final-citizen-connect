
CREATE TABLE users
(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR (255) NOT NULL,
    status INT NOT NULL,
    isDeleted INT DEFAULT 0,
    isEmailSent INT DEFAULT 0,

)


SELECT *
FROM users


DROP TABLE users


 ALTER TABLE users ADD  passwordReset INT DEFAULT 0;
