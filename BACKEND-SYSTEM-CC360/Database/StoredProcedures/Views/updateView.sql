USE CITIZENCONNECT360;
GO
CREATE OR ALTER PROCEDURE updateView(
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(4096),
    @viewsummary VARCHAR(1000),
    @createdby VARCHAR(255)
)
AS
BEGIN
    UPDATE views
    SET title = @title, description = @description, viewsummary = @viewsummary, createdby = @createdby
    WHERE id = @id
END