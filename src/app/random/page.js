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
    const parsedGuess = parseInt(guess);
    if (isNaN(parsedGuess)) {
      alert("Please enter a valid number.");
      setMessage("");
    } else {
      if (parsedGuess > 100) {
        return setMessage("The number should be smaller than 100");
      } else if (parsedGuess < 0) {
        return setMessage("The number should be greater than zero");
      } else {
        setGuessingArray((preArr) => [parsedGuess, ...preArr]);
        console.log(guessingArray);
        setAttempts(attempts - 1);
      }
    }
    console.log(typeof parsedGuess);
    setGuess("");
  };

  const submitGuessNo = (e) => {
    e.preventDefault();
    checkNum();

    console.log(typeof guess);
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
          <input type="submit" className="bttn" />
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
