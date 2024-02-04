from fastapi import FastAPI, UploadFile
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
async def all_lessons():
    titles_list = list()
    for lesson_file in os.listdir(os.getcwd() + "/Data/Lessons/"):
        with open(os.getcwd() + "/Data/Lessons/" + lesson_file) as f:
            data = json.load(f)

            titles_list.append(data["title"])
    
    return titles_list

@app.get("/authenticate/")
async def authenticate(name: str):
    with open("Data/students.csv", 'r') as csv_file:
        reader = csv.reader(csv_file)

        for row in reader:
            if row[0] == name:
                return 1
    
    return 0

@app.get("/all_students/")
async def all_students():
    students_list = list()

    with open("Data/students.csv", 'r') as csv_file:
        reader = csv.reader(csv_file)

        for row in reader:
            students_list.append(row)

    return students_list

@app.post("/save_lesson/")
async def save_lesson(file: UploadFile):
    with open("Data/Lessons/" + file.filename, "wb") as f:
        shutil.copyfileobj(file.file, f)
    
    return {"Result": "OK"}