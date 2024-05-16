import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="app-container">
    <h1>A Code Crew Conundrum</h1>
    <p className="intro-text">
      <ul>Introduction:
       Welcome to Headquarters, a place of creativity and collaboration where Code Crew is changing lives one program at a time.
      However, today, the vibrant atmosphere is replaced with sadness as the news of a tragic event spreads like wildfire.</ul>

       <ul>Plot:
      In the heart of Headquarters, amidst the hum of typing fingers and the aroma of freshly brewed coffee, lies a mystery waiting to be unraveled.
      JR, a beloved member of Code Crew, has been found lifeless. Can you help us solve the mysterious case of who killed JR?
        </ul>
        </p>
    
    <ul>
        <img src="assets/CodeCrewClue.jpg.png" className="App-logo" alt="logo" />
    </ul>
      
        
          
          <Link to="/Suspects">
        <Button variant="warning" size='lg' style={{fontSize: "2rem"}}>
          Start!
        </Button>{' '}
        </Link>
        <Link to="/Instructions">
        <Button variant="warning" size='lg' style={{fontSize: "2rem"}}>
          How To Play!
        </Button>{' '}
        </Link>
      
      </div>


  
  );
}


export default App;

