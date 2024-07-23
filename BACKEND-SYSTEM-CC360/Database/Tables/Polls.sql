
CREATE TABLE polls
(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    question VARCHAR(255) NOT NULL,
    startdate DATE NOT NULL,
    enddate DATE NOT NULL,
    createdby VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (createdby) REFERENCES users(id)
);

SELECT *
FROM polls;



Drop TABLE polls;