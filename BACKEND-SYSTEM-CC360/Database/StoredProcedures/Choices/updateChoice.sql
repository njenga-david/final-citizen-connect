USE CITIZENCONNECT360;
GO
CREATE OR ALTER PROCEDURE updateChoice(
    @id VARCHAR(255),
    @pollid VARCHAR(255),
    @choicetext VARCHAR(255)
)
AS
BEGIN
    UPDATE choices SET 
        id=@id,
        pollid=@pollid,
        choicetext=@choicetext
        WHERE id = @id;
END