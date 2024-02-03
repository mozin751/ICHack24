import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const students = [
    {
      id: "0101102",
      name: "Rohan Shah",
      lessonsCompleted: 15,
      testsCompleted: 5,
      testsMissed: 2,
      averageMark: "75%",
    },
    {
      id: "0101103",
      name: "Aaryan Purohit",
      lessonsCompleted: 9,
      testsCompleted: 1,
      testsMissed: 6,
      averageMark: "35%",
    },
    {
      id: "0101104",
      name: "Thalaiyur Mohammad Rayees Muhamad Mohsin",
      lessonsCompleted: 3,
      testsCompleted: 2,
      testsMissed: 5,
      averageMark: "95%",
    },
  ];

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Student ID Number</th>
            <th>Student Name</th>
            <th>Lessons Completed</th>
            <th>Tests Completed</th>
            <th>Tests Missed</th>
            <th>Average Test Mark</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.lessonsCompleted}</td>
              <td>{student.testsCompleted}</td>
              <td>{student.testsMissed}</td>
              <td>{student.averageMark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
