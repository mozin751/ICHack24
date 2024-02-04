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
    </div>
  );
}

export default NewLesson;
