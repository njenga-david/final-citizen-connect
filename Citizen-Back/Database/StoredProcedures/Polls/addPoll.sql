
USE CITIZENCONNECT360;
GO

CREATE OR ALTER PROCEDURE addPoll(
    @id VARCHAR(255),
    @question VARCHAR(255),
    @startdate VARCHAR(255),
    @enddate VARCHAR(255),
    @createdby VARCHAR(255)
)
AS
BEGIN
    INSERT INTO polls
        (id,question, startdate, enddate, createdby)
    VALUES
        (@id, @question, @startdate, @enddate, @createdby)
END