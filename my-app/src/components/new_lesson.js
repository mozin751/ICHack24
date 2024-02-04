import React, { useState } from "react";
import OpenAI from "openai";

function NewLesson({ setPage }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [isChecked, setChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  async function Helper(c) {
    try {
      var data = "";
      var prompt = "";

      if (isChecked) {
        prompt +=
          "I have access to FPGA boards which my students can use to represent binary numbers using switches on the FPGA. Using the FPGA,";
      } else {
        prompt +=
          " in under 100 words create a homework I can give to my students with this title: " +
          c +
          ". Do not reiterate the name of the title to me again.";
      }

      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        stream: true,
      });

      for await (const chunk of stream) {
        data += chunk.choices[0]?.delta?.content || "";
      }
      console.log("Data is:" + data);
      return data;
    } catch {
      console.log("Error");
    }
  }

  async function main(c) {
    try {
      const result = await Helper(c);
      return result;
      // Further processing with the result
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function generatePrompt() {
    // Call the main function with the title and update the body
    setBody("Generating...");
    const result = await main(title);
    setBody(result);
  }

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
        <div className="checkbox-container">
          <label htmlFor="fpga_check" className="checkbox-label">
            FPGA Assignment
            <input
              id="fpga_check"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="checkbox-input"
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <button onClick={() => setPage("home")}>Back to Home</button>
        <button onClick={generatePrompt}>Generate a Lesson!</button>
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
          margin-bottom: 10px;
        }
        .textarea-input {
          height: 150px;
        }
        .button-group button {
          margin-top: 30px;
          padding: 10px 37px;
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
        .checkbox-container {
          display: flex;
          align-items: center;
        }
        .checkbox-label {
          cursor: pointer;
          position: relative;
          padding-left: 35px;
        }
        .checkbox-input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: #eee;
          border-radius: 50%;
        }
        .checkbox-label:hover input ~ .checkmark {
          background-color: #ccc;
        }
        .checkbox-label input:checked ~ .checkmark {
          background-color: #007bff;
        }
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        .checkbox-label input:checked ~ .checkmark:after {
          display: block;
        }
        .checkbox-label .checkmark:after {
          left: 7px;
          top: 3px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  );
}

export default NewLesson;
