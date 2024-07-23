
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addChoice(
    @id VARCHAR(255),
    @pollid VARCHAR(255),
    @choicetext VARCHAR(255)
)
AS
BEGIN
    INSERT INTO  choices
        (id,pollid,choicetext)
    VALUES
        (@id, @pollid, @choicetext)
END
