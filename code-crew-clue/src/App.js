import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
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
          
          
        <Button variant="primary" size='lg' style={{fontSize: "2rem"}}>
          Start!
        </Button>{' '}
       
      </header>
     
    </div>
    
  );
};

export default App;
