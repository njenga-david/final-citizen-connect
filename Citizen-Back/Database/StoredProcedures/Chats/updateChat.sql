
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE updateChat(
    @id VARCHAR(255),
    @userid VARCHAR(255)
   
)
AS
BEGIN
    UPDATE chats
    SET userid = @userid
    WHERE id = @id
END