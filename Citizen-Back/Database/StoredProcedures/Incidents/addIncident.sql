
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addIncident(
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(4096),
    @location VARCHAR(255),
    @multimedia VARCHAR(255),
    @incidentsummary VARCHAR(1024),
    @createdby VARCHAR(255),
    @createdat DATE
)
AS
BEGIN
    INSERT INTO incidents
        (id, title, description, location, multimedia, incidentsummary, createdby, createdat)
    VALUES
        (@id, @title, @description, @location, @multimedia, @incidentsummary, @createdby, @createdat)

END