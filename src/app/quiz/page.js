"use client";
import "./quiz.css";
import "./quizMobile.css";
import data from "./data.js";
import { useState } from "react";
export default function page() {
  const [index, setIndex] = useState(0);

  return (
    <div className="container">
      <div className="Quiz-box">
        <h2 className="Question">1 This is first Question.</h2>
        <div className="row">
          <button>Option 1</button>
          {/* <input
            type="radio"
            name="Option"
            class="answer"
            className="option1"
          /> */}
          <label for="option1">Option No 1</label>
        </div>
        <div className="row">
          <input
            type="radio"
            name="Option"
            class="answer"
            className="option2"
          />
          <label for="option2">Option No 1</label>
        </div>
        <div className="row">
          <input
            type="radio"
            name="Option"
            class="answer"
            className="option3"
          />
          <label for="option3">Option No 1</label>
        </div>
        <div className="row">
          <input
            type="radio"
            name="Option"
            class="answer"
            className="option4"
          />
          <label for="option4">Option No 1</label>
        </div>
        <button className="btn" onclick="nextPreviousClick(+1)">
          Next
        </button>
        <button className="btn">Submit</button>
        <button className="btn" onclick="nextPreviousClick(-1)">
          Previous
        </button>
      </div>
    </div>
  );
}
