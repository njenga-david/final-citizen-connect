CREATE TABLE chats
(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    userid VARCHAR(255) NOT NULL,
    createdat DATE NOT NULL,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (userid) REFERENCES users(id)
)

SELECT * FROM chats

DROP Table chats