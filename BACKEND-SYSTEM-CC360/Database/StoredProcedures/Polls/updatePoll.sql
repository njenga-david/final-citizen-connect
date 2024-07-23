USE CITIZENCONNECT360;
GO
CREATE OR ALTER PROCEDURE updatePoll(
    @id VARCHAR(255),
    @question VARCHAR(255),
    @startdate VARCHAR(255),
    @enddate VARCHAR(255),
    @createdby VARCHAR(255)
)
AS
BEGIN
    UPDATE polls SET 
        id=@id,
        question = @question,
        startdate = @startdate,
        enddate = @enddate,
        createdby = @createdby
        WHERE id = @id;
END