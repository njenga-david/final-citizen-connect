USE CITIZENCONNECT360;
GO
CREATE OR ALTER PROCEDURE updateUser(
    @id VARCHAR(255),
    @username VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @role VARCHAR(255),
    @status INT
)
AS
BEGIN

    UPDATE users SET
        id=@id,
        username= @username,
        email=@email,
        password=@password,
        role=@role,
        status=@status
    
    WHERE id = @id AND isDeleted = 0
END