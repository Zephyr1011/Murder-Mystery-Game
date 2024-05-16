import React, { useState, useEffect } from 'react';/*managing state and side effects*/
import './Game.css';/*import game styling*/

function Game() {/*main component is game*/
  const [clues, setClues] = useState([]); /*state variable 'clues' stores clues fetched from Api*/
  const [randomClues, setRandomClues] = useState([]);/* Stores a random selection of 5 clues from the fetched clues.*/
  const [userGuesses, setUserGuesses] = useState([]);/*keeping tract of user guesses*/
  const [guessCount, setGuessCount] = useState(0); /*counts how many guesses*/

  useEffect(() => {/*When component loads, clues are fetched from local server*/
    fetch('http://localhost:3000/api/clues')
      .then(response => response.json())
      .then(data => {
        setClues(data);
        generateRandomClues(data);
      })
      .catch(error => console.error('Error fetching clues:', error));
      /*error message if error occurs while trying yo fetch data*/
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



      

  /*shuffles clues and picks first 5 to display*/


  /*component*/ 
    /*when user makes a guess it increases by 1*/
  /*if guess is less than 2 it adds another another guess count*/
     
     /*if the guess is Shakyra it renders winner and redirects to results page*/
     
         // Redirect to result page
  /*If the guess is wrong and it’s the user's second guess it saves loser in local storage and redirects to a result page*/
       
   // Redirect to result page
/*If the guess count is 2 or more, it saves "loser" in local storage and redirects to a result page.8*/

      // Redirect to result page

  ;

  /*styling for game*/
     /*header*/
      /*styling for clues*/
        /*area where clues are generated*/
          
      


    