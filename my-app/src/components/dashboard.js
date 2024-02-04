import { useState, useEffect } from 'react';
import NewLesson from "./new_lesson";

const Dashboard = () => {
  const [page, setPage] = useState("home");
  const [students, setStudents] = useState([]);
  
  var cnt = 1;
  useEffect(() => {
    fetch('http://146.169.140.182/all_students/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.students);
        setStudents(data.students);
      });
  }, []);

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
            <tr key={student}>
              <td> {cnt++}</td>
              <td>{student[0]}</td>
              <td>{student[1]}</td>
              <td>{student[2]}</td>
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