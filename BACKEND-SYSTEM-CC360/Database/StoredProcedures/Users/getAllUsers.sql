USE CITIZENCONNECT360;
GO
CREATE OR ALTER PROCEDURE getAllUsers
AS
BEGIN 
SELECT * FROM users WHERE isDeleted != 1;
END