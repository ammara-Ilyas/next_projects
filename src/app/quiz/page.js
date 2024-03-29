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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFlag, setIsFlag] = useState(null);

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
    if (ans.trim() === data[index].correct.trim()) {
      console.log("Correct!");
      setScore((preScore) => preScore + 1);
      setIsFlag(true);
    } else {
      console.log("Incorrect!");
      setIsFlag(false);
    }
    setSelectedAnswer(ans);
    setClickOption(false);
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
                style={
                  selectedAnswer === ans
                    ? {
                        backgroundColor: isFlag ? "green" : "red",
                        color: isFlag ? "white" : "white",
                      }
                    : {}
                }
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
          <h1>
            Your score are {score} / {data.length}
          </h1>
        </div>
      )}
    </div>
  );
}
