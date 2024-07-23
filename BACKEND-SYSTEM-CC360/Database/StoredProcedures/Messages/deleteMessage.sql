
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE deleteMessage(
    @id VARCHAR(255)
)
AS
BEGIN
    UPDATE messages
    SET isDeleted = 1
    WHERE id = @id
END