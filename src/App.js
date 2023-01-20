import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Alert } from 'bootstrap';


function App() {

const [gameStarted, setGameStarted] = useState(false)

const [whichPlayer, setPlayer] = useState(null)



const handleButton = (event) => {
  setGameStarted (true);
  alert("game started");
  setPlayer("X");
}



  return (

    <div>
    <button className="button" onClick={handleButton}>
      Start Game
      </button>
      <div className='grid'>
        <div className='cell'>
        
        </div>
        <div className='cell'>

        </div>
        <div className='cell'>

        </div>
        <div className='cell'>

        </div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
    </div>
    </div>
  );
}

export default App;
