
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE getAllVotes
AS
BEGIN
    SELECT* FROM  votes WHERE isDeleted !=1
END