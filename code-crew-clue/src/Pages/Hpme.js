import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
export function Home() {
    return(
        <>
        <header className="App-header">
        <img src="assets/CodeCrewClue.jpg.png" className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          </a>
          
          <div className='buttons'>
            <Link to = '/Suspects'>
        <Button variant="warning" size='lg' style={{fontSize: "2rem"}}>
          Start!
        </Button>{' '}
        </Link>
        <Link to="/Instructions">
        <Button variant="warning" size='lg' style={{fontSize: "2rem"}} id='tutorialButton'>
          How To Play!
        </Button>{' '}
        </Link>
        </div>
      </header>
      </>
     
    )
}