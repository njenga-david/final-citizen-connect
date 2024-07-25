
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
    UPDATE votes SET 
        id=@id,
        pollid=@pollid,
        choiceid=@choiceid,
        voterid=@pollid
        WHERE id = @id;
END

