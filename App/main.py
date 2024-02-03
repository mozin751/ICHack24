from fastapi import FastAPI
import os

app = FastAPI()


@app.get("/")
async def index():
    """
    A simple Hello World GET request
    """
    return {"message": "Hello, World!"}

@app.get("/all_lessons/")
async def all_lessons():
    return {"lessons_list": os.listdir(os.getcwd() + "/Data/Lessons/")}

# @app.get("/authenticate/")
# async def 