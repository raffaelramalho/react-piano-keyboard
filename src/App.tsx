import React from 'react';
import { notes } from './helpers';
import Octave from './Octave';
import './App.css';



function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    const audio = new Audio(`sounds/${e.currentTarget.value}.mp3`);
    audio.play();
  };

  return <Octave notes={notes} clickHandler={handleClick} />;
}

export default App;