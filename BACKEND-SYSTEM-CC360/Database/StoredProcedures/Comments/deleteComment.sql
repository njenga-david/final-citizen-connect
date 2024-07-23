
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE deleteComment(
    @id VARCHAR(255)
)
AS
BEGIN
    UPDATE comments
    SET isDeleted = 1
    WHERE id = @id
END