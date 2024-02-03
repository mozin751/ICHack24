import React, { useState } from "react";

function NewLesson({ setPage }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Function to handle the submission of the lesson
  // Placeholder function, implement the logic as needed
  const handleSubmit = () => {
    alert("Lesson submitted with title: " + title);
    // Implement submission logic here
  };

  return (
    <div className="NewLesson">
      <h1>Create a New Lesson</h1>
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
        <button onClick={() => setPage("home")} className="button">
          Back to Home
        </button>
        <button onClick={handleSubmit} className="button submit-button">
          Submit Lesson
        </button>
      </div>
      <style>
        {`
          .NewLesson {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .form-group {
            margin-bottom: 20px;
          }
          label {
            display: block;
            margin-bottom: 5px;
          }
          .text-input, .textarea-input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .textarea-input {
            height: 150px;
          }
          .button-group {
            display: flex;
            justify-content: space-between;
          }
          .button {
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 10px; /* Ensure a little space between buttons */
          }
          .button:hover {
            background-color: #0056b3;
          }
          .submit-button {
            background-color: #28a745; /* Slightly different color for submit */
          }
          .submit-button:hover {
            background-color: #218838;
          }
        `}
      </style>
    </div>
  );
}

export default NewLesson;
