from langchain.agents.agent_types import AgentType
from langchain.chat_models import ChatOpenAI
from langchain.agents import create_sql_agent
from langchain.sql_database import SQLDatabase
from langchain.agents.agent_toolkits import SQLDatabaseToolkit
import os
 
KEY =os.getenv('OPENAI_API_KEY')

uri ='mssql+pyodbc://sa:James1234@localhost:1433/CITIZENCONNECT360?driver=ODBC+Driver+17+for+SQL+Server'
database = SQLDatabase.from_uri(uri)
 
def summarize_function(tableName):
    llm = ChatOpenAI(model='gpt-3.5-turbo', openai_api_key=KEY)
    toolkit = SQLDatabaseToolkit(db=database, llm=llm)
 
    agent_executor = create_sql_agent(
        llm = llm,
        toolkit=toolkit,
        agent_type = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        verbose= True,
       prefix = 'You are an AI that interacts with a Microsoft SQL Server (MSSQL) database. Your access is read-only and limited to querying and summarizing data. You should not attempt to alter or delete any information in the database.'
 
    )
 
 
    try:
        result = agent_executor(f"Summarize the reviews in the {tableName} table, focusing on the most common themes and overall sentiment expressed by users.")
    except Exception as e:  # Catching any type of exception
        # Handle the error (e.g., print message, log error)
        print("An error occurred:", e)
        result = e
 
    print(result)
    return result