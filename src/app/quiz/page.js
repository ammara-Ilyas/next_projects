"use client";
import "./quiz.css";
import "./quizMobile.css";
import data from "./data.js";
import { useState } from "react";
export default function page() {
  const [index, setIndex] = useState(0);
  const [clickOption, setClickOption] = useState(true);
  const [score, setScore] = useState(0);
  const [Question, setQuestion] = useState(true);

  let { question, answer } = data[index];

  const nextPreviousClick = (x) => {
    console.log(index);
    if (index + x >= 0 && index + x < data.length) {
      setIndex((prevIndex) => prevIndex + x);
      console.log("neg");
    } else if (index + x >= data.length) {
      return setQuestion(false);
    } else {
      return setIndex(0);
    }
    return setClickOption(true);
  };
  const CheckAnswer = (ans) => {
    if (ans === data[index].correct) {
      console.log("Correct!");
      setScore((preScore) => preScore + 1);
    } else {
      console.log("Incorrect!");
    }
    return setClickOption(false);
  };

  return (
    <div className="container_quiz">
      {Question ? (
        <div className="quiz-box ">
          <h2 className="question">{question}</h2>
          {answer.map((ans, i) => (
            <div className="row" key={i}>
              <button
                className="button"
                onClick={clickOption ? () => CheckAnswer(ans) : undefined}
              >
                {ans}
              </button>
            </div>
          ))}
          <div className="next">
            <button className="btn" onClick={() => nextPreviousClick(+1)}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="quiz-box scorePage" style={{ height: "60%" }}>
          <h1>Your score are {score}</h1>
        </div>
      )}
    </div>
  );
}
