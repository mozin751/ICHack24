import { useState, useEffect } from 'react';
import NewLesson from "./new_lesson";

const LessonsDashboard = () => {
  const [page, setPage] = useState("home");
  const [lessons, setLessons] = useState([]);
  
  var cnt = 1;
  useEffect(() => {
    fetch('http://146.169.140.182/all_lessons/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.Lessons);
        setLessons(data.Lessons);
      });
  }, []);

  if (page === "newLesson") {
    return <NewLesson setPage={setPage} />;
  }

  return (
<div className="App">
      <h2>Lessons Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Lesson ID</th>
            <th>Lesson Name</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson}>
              <td> {cnt++}</td>
              <td>{lesson}</td>
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
export default LessonsDashboard;