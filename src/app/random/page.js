"use client";

import { useState } from "react";
import "./Random.css";
export default function page() {
  const [guess, setGuess] = useState("");
  const [guessingArray, setGuessingArray] = useState([]);
  const [attempts, setAttempts] = useState(10);
  const [guessNo, setGuessNo] = useState(Math.floor(Math.random() * 100));
  const [message, setMessage] = useState("");
  const [gamePlay, setGamePlay] = useState(true);
  const [number, setNumber] = useState();

  const startGame = () => {
    setGamePlay(true);
    setAttempts(10);
    setGuessingArray([]);
  };
  const checkingGuessNo = () => {
    if (guess == guessNo) {
      setGamePlay(false);
      return setMessage("Congratulation,You win! ");
    } else if (guess > guessNo) {
      return setMessage("Your number is Too greater than guessing Number");
    } else if (guess < guessNo) {
      return setMessage("Your number is Too smaller than guessing Number");
    }
  };

  const checkAttempt = () => {
    if (attempts == 1) {
      setMessage("Oh no, you lost the game!  ");
      setGamePlay(false);
    }
  };
  const checkNum = () => {
    if (guess === "") {
      alert("Write the Number");
      return setMessage("");
      setNumber(false);
    } else {
      if (guess > 100) {
        setNumber(false);
        return setMessage("The number should be smaller than 100");
      } else if (guess < 0) {
        setNumber(false);
        return setMessage("The number should be greater than zero");
      } else {
        setNumber(true);
      }
    }
    setGuess("");
  };

  const submitGuessNo = (e) => {
    e.preventDefault();
    checkNum();
    // if (guess === "") {
    //   alert("Write the Number");
    //   return setMessage("");
    // } else {
    //   if (guess > 100) {
    //     return setMessage("The number should be smaller than 100");
    //   } else if (guess < 0) {
    //     return setMessage("The number should be greater than zero");
    //   } else {
    //     setGuessingArray((preArr) => [guess, ...preArr]);
    //     console.log(guessingArray);
    //     setAttempts(attempts - 1);
    //   }
    // }
    if (number) {
      setGuessingArray((preArr) => [guess, ...preArr]);
      console.log(guessingArray);
      setAttempts(attempts - 1);
    }
    console.log(guess);
    setGuess("");
    checkingGuessNo();
    checkAttempt();
    console.log(guessNo);
  };
  return (
    <div>
      <div className="container_ran">
        <div className="heading">
          <h1>Number Guessing Game</h1>
          <p>Guess the number between 1 and 100</p>
          <p>You have 10 attempts to guess the number</p>
        </div>
        <form action="" className="form" onSubmit={submitGuessNo}>
          <h1>Guess the Number</h1>
          <input
            type="text"
            className="inp"
            value={guess}
            onChange={gamePlay ? (e) => setGuess(e.target.value) : undefined}
          />
          <input type="submit" className="btn" />
        </form>
        <div className="result">
          <p>
            Previous guesses
            {`[ ${guessingArray} ]`}
            {/* [
            {guessingArray.map((guess, index) => (
              <span key={index}> {guess} </span>
            ))}
            ] */}
          </p>
          <p>Guesses remaining {attempts}</p>
          <div className="newGame">
            <h2>{message}</h2>
            {gamePlay ? (
              ""
            ) : (
              <button className="newGame" onClick={startGame}>
                Start new Game
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
