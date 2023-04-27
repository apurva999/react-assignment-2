import React, { useState } from "react";
import "./lucky.css"

function GuessNumber() {
  const [luckyNumber] = useState(1);
  const [guess, setGuess] = useState(" ");
  const [attempts, setAttempts] = useState(0);

  function handleGuess() {
    if (guess === luckyNumber) {
      alert(`Congratulations! You guessed the right number ${luckyNumber} in ${attempts + 1} attempts`);
    } else if (guess < luckyNumber) {
      alert("You guessed a smaller number");
    } else {
      alert("you guessed a bigger number");
    }
    setAttempts(attempts + 1);
  }

  return (
    <div className="main">
      <h1>Guessing Lucky Number Game</h1>
      <input type="number" value={guess} placeholder="Guess Lucky Number..." onChange={(e) => setGuess(parseInt(e.target.value))} />
      <button onClick={handleGuess}>Match Number</button>
    </div>
  );
}

export default GuessNumber;