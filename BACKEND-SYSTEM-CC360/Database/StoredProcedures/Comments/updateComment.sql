
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE updateComment(
    @id VARCHAR(255),
    @comment VARCHAR(4096),
    @viewid VARCHAR(255),
    @createdby VARCHAR(255)
)
AS
BEGIN
    UPDATE comments
    SET comment = @comment, viewid = @viewid, createdby = @createdby
    WHERE id = @id
END