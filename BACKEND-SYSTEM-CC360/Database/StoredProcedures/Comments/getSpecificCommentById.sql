
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE getSpecificCommentById(
    @id VARCHAR(255)
)
AS
BEGIN
    SELECT *
    FROM comments
    WHERE id = @id
END