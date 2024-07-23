
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addMessage(
    @id VARCHAR (255),
    @chatid VARCHAR (255),
    @userid VARCHAR (255),
    @sender VARCHAR (255),
    @messagetext VARCHAR (255),
    @sentat DATE

)
AS
BEGIN
    INSERT INTO messages
        (id, chatid, userid, sender, messagetext, sentat)
    VALUES
        (@id, @chatid, @userid, @sender, @messagetext, @sentat)
END
