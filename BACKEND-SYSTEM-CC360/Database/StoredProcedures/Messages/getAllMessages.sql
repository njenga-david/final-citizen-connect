
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE getAllMessages
AS
BEGIN
    SELECT *
    FROM messages
    WHERE isDeleted !=1
END