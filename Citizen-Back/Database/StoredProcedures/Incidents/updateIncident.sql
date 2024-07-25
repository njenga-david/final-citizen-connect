
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE updateIncident(
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(4096),
    @location VARCHAR(255),
    @multimedia VARCHAR(255),
    @createdby VARCHAR(255)
    )
AS
BEGIN
    UPDATE incidents
    SET
        title = @title,
        description = @description,
        location = @location,
        multimedia = @multimedia,
        createdby = @createdby
    WHERE id = @id
END