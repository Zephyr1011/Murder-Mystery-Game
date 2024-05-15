import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div>
    <h1>Murder at Code Crew HeadQuarters</h1>
    <p></p>
    
    <div className="App">
      <header className="App-header">
        <img src="assets/CodeCrewClue.jpg.png" className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          </a>
          
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
      </header>
      </div>
    </div>

  
  );
}


export default App;

