import React, { useState, useEffect } from 'react';
import './Game.css';


function Game() {
  const [clues, setClues] = useState([]);
  const [randomClues, setRandomClues] = useState([]);
  const [userGuesses, setUserGuesses] = useState([]);
  const [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/clues')
      .then(response => response.json())
      .then(data => {
        setClues(data);
        generateRandomClues(data);
      })
      .catch(error => console.error('Error fetching clues:', error));
  }, []);

  const generateRandomClues = (clues) => {
    const shuffledClues = clues.sort(() => 0.5 - Math.random());
    setRandomClues(shuffledClues.slice(0, 5));
  };

  const handleGuess = (murderer) => {
    setGuessCount(prevCount => prevCount + 1);
    if (guessCount < 2) {
      setUserGuesses(prevGuesses => [...prevGuesses, murderer]);
      if (murderer === 'Shakyra') { 
        localStorage.setItem('result', 'winner');
        window.location.href = '/result'; // Redirect to result page
      } else if (guessCount === 1) {
        localStorage.setItem('result', 'loser');
        window.location.href = '/result'; // Redirect to result page
      }
    } else {
      localStorage.setItem('result', 'loser');
      window.location.href = '/result'; // Redirect to result page
    }
  };

  return (
    <div className='game-container'>
      <h3>Read the clues and solve the mystery!</h3>
      <div id="clue-container">
        {randomClues.map((clue, index) => (
          <div key={index}>
            <p>{clue.text}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Make your guess:</h3>
        {clues.map((clue, index) => (
          <button key={index} onClick={() => handleGuess(clue.name)}>{clue.name}</button>
        ))}
      </div>
    </div>
  );
}

export default Game;
  
    
  


    