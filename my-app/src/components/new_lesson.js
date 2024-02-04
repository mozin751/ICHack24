import React, { useState } from "react";
import OpenAI from "openai";

function NewLesson({ setPage }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [optionSelected, setOptionSelected] = useState("");

  const handleCheckboxChange = (value) => {
    setOptionSelected(value);
  };

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  async function Helper(c) {
    try {
      let prompt =
        "I have access to FPGA boards which my students can use to represent binary numbers using switches on the FPGA. Using the FPGA, in under 100 words create a lesson plan with this title: " +
        c +
        "\n Do not reiterate the name of the title to me again.";
      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        stream: true,
      });

      let data = "";
      for await (const chunk of stream) {
        data += chunk.choices[0]?.delta?.content || "";
      }
      console.log("Data is:" + data);
      return data;
    } catch {
      console.log("Error");
    }
  }

  // async function main(c) {
  //   const stream = await openai.chat.completions.create({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: c}],
  //     stream: true,
  //   });
  //   let data = "";
  //   for await (const chunk of stream) {
  //     data += chunk.choices[0]?.delta?.content || ""
  //   }
  //   return data;
  // }

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

    // Replace spaces with underscores in the title for the filename
    const fileName = `${title.replace(/ /g, "_")}.json`;

    const link = document.createElement("a");
    link.href = href;
    link.download = fileName; // Use the modified title as the file name
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
