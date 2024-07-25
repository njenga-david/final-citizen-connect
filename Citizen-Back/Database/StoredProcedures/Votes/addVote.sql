
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addVote(
    @id VARCHAR(255),
    @pollid VARCHAR(255),
    @choiceid VARCHAR(255),
    @voterid VARCHAR(255)
)
AS
BEGIN
    INSERT INTO votes
        (id,pollid,choiceid,voterid)
    VALUES
        (@id, @pollid, @choiceid, @voterid)
END

