import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
const navigate = useNavigate();

const startGame = () => {
    navigate('/game');
}

  return (
    <div className="home-page">
        <div className='text-home'>
          <h1>Memory Game</h1>
        </div>
      <button className='BUTTON_FHQ ' onClick={startGame}>Play</button>
    </div>
  )
}

export default HomePage