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
