
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE getAllChoices
AS
BEGIN
    SELECT* FROM choices WHERE isDeleted !=1
END