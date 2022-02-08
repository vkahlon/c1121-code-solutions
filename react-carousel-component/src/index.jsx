import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';
const pokedex = [
  { pokemonID: 0, image: '../images/001.png' },
  { pokemonID: 1, image: '../images/004.png' },
  { pokemonID: 2, image: '../images/007.png' },
  { pokemonID: 3, image: '../images/025.png' },
  { pokemonID: 4, image: '../images/039.png' }
];
ReactDOM.render(
  < Carousel pokemon={pokedex}/>,
  document.querySelector('#root')
);
