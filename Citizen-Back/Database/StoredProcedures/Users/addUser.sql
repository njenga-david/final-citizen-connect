USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addUser(
    @id VARCHAR(255),
    @username VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @role VARCHAR(255)
)
AS
BEGIN
-- Determine the value of @status based on the value of @role
    DECLARE @status INT;
    IF @role = 'Citizen' 
        SET @status = 1;
    ELSE  IF @role = 'Government Official' 
        SET @status = 0;

 -- Insert the new user into the users table
    INSERT INTO users
        (id, username, email, password, role, status)
    VALUES
        (@id, @username, @email, @password, @role, @status);

END