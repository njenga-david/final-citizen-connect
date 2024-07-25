USE CITIZENCONNECT360

GO
CREATE TABLE choices
(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    pollid VARCHAR(255) NOT NULL,
    choicetext VARCHAR(255) NOT NULL,
    votecount INT DEFAULT 0,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (pollid) REFERENCES polls(id)
)

SELECT *
FROM choices;

Drop TABLE choices
