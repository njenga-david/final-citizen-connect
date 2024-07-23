
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE updateMessage(
    @id VARCHAR(255),
    @chatid VARCHAR(255),
    @userid VARCHAR(255),
    @sender VARCHAR(255),
    @messagetext VARCHAR(255)
)
AS
BEGIN
    UPDATE messages
    SET id = @id, chatid = @chatid, userid = @userid, sender = @sender, messagetext = @messagetext
    WHERE id = @id
END