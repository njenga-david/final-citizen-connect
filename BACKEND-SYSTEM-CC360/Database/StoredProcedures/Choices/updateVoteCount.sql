
USE CITIZENCONNECT360;
GO
CREATE OR ALTER PROCEDURE updateVoteCount(@id VARCHAR (255))
AS
BEGIN
    UPDATE choices
    SET votecount = votecount + 1
    WHERE id =@id;
END
