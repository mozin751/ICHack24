from fastapi import FastAPI, UploadFile, Response
import shutil
import os
import csv
import json

app = FastAPI()


@app.get("/")
async def index():
    """
    A simple Hello World GET request
    """
    return {"message": "Hello, World!"}

@app.get("/all_lessons/")
async def all_lessons(response: Response):
    titles_list = list()
    for lesson_file in os.listdir(os.getcwd() + "/Data/Lessons/"):
        with open(os.getcwd() + "/Data/Lessons/" + lesson_file) as f:
            data = json.load(f)

            titles_list.append(data["title"])
    
    response.headers["Access-Control-Allow-Origin"] = "*"
    return {"Lessons": titles_list}

@app.get("/authenticate/")
async def authenticate(name: str, response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    with open("Data/students.csv", 'r') as csv_file:
        reader = csv.reader(csv_file)

        for row in reader:
            if row[0] == name:
                return 1
    
    return 0

@app.get("/all_students/")
async def all_students(response: Response):
    students_list = list()

    with open("Data/students.csv", 'r') as csv_file:
        reader = csv.reader(csv_file)

        for row in reader:
            students_list.append(row)

    response.headers["Access-Control-Allow-Origin"] = "*"
    return {"students": students_list}

@app.post("/save_lesson/")
async def save_lesson(file: UploadFile, response: Response):
    with open("Data/Lessons/" + file.filename, "wb") as f:
        shutil.copyfileobj(file.file, f)
    
    response.headers["Access-Control-Allow-Origin"] = "*"
    return {"Result": "OK"}

@app.get("/get_lesson/")
async def get_lesson(title: str, response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"

    for lesson_file in os.listdir(os.getcwd() + "/Data/Lessons/"):
        with open(os.getcwd() + "/Data/Lessons/" + lesson_file) as f:
            data = json.load(f)
            if title == data["title"]:
                return data
    
    return {"Result": "Not Found"}