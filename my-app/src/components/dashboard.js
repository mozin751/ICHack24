import { React, useState } from "react";
import NewLesson from "./new_lesson";
const Dashboard = () => {
  const [page, setPage] = useState("home"); // Added to manage page state
  const students = [
    {
      id: "1",
      name: "Rohan Shah",
      lessonsCompleted: 15,
      testsCompleted: 5,
    },
    {
      id: "2",
      name: "Aaryan Purohit",
      lessonsCompleted: 9,
      testsCompleted: 1,
    },
    {
      id: "0101104",
      name: "Thalaiyur Mohammad Rayees Muhamad Mohsin",
      lessonsCompleted: 3,
      testsCompleted: 5,
    },
  ];

  if (page === "newLesson") {
    return <NewLesson setPage={setPage} />;
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Student ID Number</th>
            <th>Student Name</th>
            <th>Lessons Completed</th>
            <th>Tests Completed</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.lessonsCompleted}</td>
              <td>{student.testsCompleted}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="createLessonBtn" onClick={() => setPage("newLesson")}>
        Create Lesson
      </button>
    </div>
  );
};

export default Dashboard;
