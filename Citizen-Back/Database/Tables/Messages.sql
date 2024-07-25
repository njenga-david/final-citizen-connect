USE CITIZENCONNECT360

GO
CREATE TABLE messages
(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    chatid VARCHAR(255) NOT NULL,
    userid VARCHAR(255) NOT NULL,
    sender VARCHAR(255) NOT NULL,
    messagetext VARCHAR(4096) NOT NULL,
    sentat DATE NOT NULL,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (chatid) REFERENCES chats(id),
    FOREIGN KEY (userid) REFERENCES users(id)
)

SELECT *
FROM messages

DROP Table messages;