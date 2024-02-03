import {React,useState } from "react";
const Dashboard = () => {
    const [page, setPage] = useState("home"); // Added to manage page state
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
  
    if (page === "newLesson") {
      return (
        <div className="App">
          <h1>New Lesson</h1>
          <button onClick={() => setPage("home")}>Back to Home</button>
        </div>
      );
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
        <button className="createLessonBtn" onClick={() => setPage("newLesson")}>
          Create Lesson
        </button>
      </div>
    );
}

export default Dashboard;