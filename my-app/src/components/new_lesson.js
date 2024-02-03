import React, { useState } from "react";

function NewLesson({ setPage }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const lessonData = { title, body };
    const blob = new Blob([JSON.stringify(lessonData, null, 2)], {
      type: "application/json",
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "lesson.json"; // This will suggest saving the file as "lesson.json"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="NewLesson">
      <h1>New Lesson</h1>
      <div className="form-group">
        <label htmlFor="lessonTitle">Title</label>
        <input
          type="text"
          id="lessonTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lessonBody">Body</label>
        <textarea
          id="lessonBody"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="textarea-input"
        ></textarea>
      </div>
      <div className="button-group">
        <button onClick={() => setPage("home")}>Back to Home</button>
        <button onClick={handleSubmit}>Submit Lesson</button>
      </div>
      <style jsx>{`
        .NewLesson {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        .text-input,
        .textarea-input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .textarea-input {
          height: 150px;
        }
        .button-group button {
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 10px;
        }
        .button-group button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default NewLesson;
