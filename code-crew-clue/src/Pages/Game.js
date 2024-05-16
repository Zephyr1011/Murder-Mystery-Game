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
      }}
    };
  
    
  

export default Game;