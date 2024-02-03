import React from "react";

function NewLesson({ setPage }) {
  return (
    <div className="NewLesson">
      <h1>New Lesson</h1>
      {/* You can add form elements or other content here as needed */}
      <button onClick={() => setPage("home")}>Back to Home</button>
    </div>
  );
}

export default NewLesson;