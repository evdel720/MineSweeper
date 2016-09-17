import React from 'react';
import { render } from 'react-dom';
import Game from './components/game';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  render(
    <Game gridSize={10} numBombs={10}/>
  ,root);
});
