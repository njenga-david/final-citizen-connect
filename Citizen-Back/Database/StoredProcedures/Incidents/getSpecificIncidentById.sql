
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE getSpecificIncidentById(
    @id VARCHAR (255)
)
AS
BEGIN
    SELECT *
    FROM incidents
    WHERE id = @id
END