
CREATE TABLE votes(
    id VARCHAR (255) PRIMARY KEY NOT NULL,
    pollid VARCHAR (255) NOT NULL,
    choiceid VARCHAR (255) NOT NULL,
    voterid VARCHAR (255) NOT NULL,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (pollid) REFERENCES polls(id),
    FOREIGN KEY (choiceid) REFERENCES choices(id),
    FOREIGN KEY (voterid) REFERENCES users(id)
  
)

SELECT * FROM votes

DROP TABLE votes