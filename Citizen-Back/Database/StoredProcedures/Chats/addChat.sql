
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addChat(
    @id VARCHAR(255),
    @userid VARCHAR(255),
    @createdat DATE
)
AS
BEGIN
    INSERT INTO chats
        (id, userid, createdat)
    VALUES
        (@id, @userid, @createdat)
END