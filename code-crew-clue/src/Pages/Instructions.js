import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Instructions() {
  return (
    <div>
      <h1>How to play!</h1>
      <p>Here are the rules to the game.</p>
      <p>1. Read each suspects discription. This will include motive and weapon of choice</p>
      <p>2. Read all 5 clues</p>
      <p>3. You get 2 guess to figure out who killed the code crew member</p>
      <p>4. If you guess correctly you will move on to the next round, if you dont you will have to start over</p>
      <p>See how many you can guess correctly in a row!</p>
      <Link to="/Suspects">
      <Button variant="warning" size='lg' style={{fontSize: "2rem"}}>
          Start!
        </Button>{' '}
      </Link>
    </div>
  );
}

export default Instructions;
