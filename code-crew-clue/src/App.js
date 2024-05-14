import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {Instructions} from './Pages/Instructions'
import { Suspects } from './Pages/Suspects';
import{HashRouter,Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './Pages/Hpme';
function App() {
  return (
    
    <div className="App">
      <HashRouter basename='/'>
      <header className="App-header">
        <img src="assets/CodeCrewClue.jpg.png" className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          </a>
          
          
        <Button variant="warning" size='lg' style={{fontSize: "2rem"}}>
          Start!
        </Button>{' '}
        <Link to="/Instructions">
        <Button variant="warning" size='lg' style={{fontSize: "2rem"}}>
          How To Play!
        </Button>{' '}
        </Link>
      </header>
     
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Instructions' element={<Instructions />}/>
        <Route path='/Suspects' element={<Suspects />}/>
      </Routes>
     </HashRouter>
    </div>
    
  );
};

export default App;
