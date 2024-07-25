
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addComment(
    @id VARCHAR(255),
    @comment VARCHAR(4096),
    @viewid VARCHAR(255),
    @createdby VARCHAR(255),
    @createdat DATE
)
AS
BEGIN
    INSERT INTO comments
        (id, comment, viewid, createdby, createdat)
    VALUES
        (@id, @comment, @viewid, @createdby, @createdat)
END