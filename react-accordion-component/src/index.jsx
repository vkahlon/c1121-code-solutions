import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const character = [
  { id: 1, name: 'Big Boss', bio: 'Big Boss, serving as the central character of the Metal Gear series of video games, as well as the series initial protagonist, chronologically speaking.He founded U.S.Army Special Forces Unit FOXHOUND, along with the mercenary company Militaires Sans Frontières, and was one of the founding members of the Patriots.Big Boss later established the military states of Outer Heaven and Zanzibar Land as bases for his companies, in order to realize his ambitions of creating a nation for soldiers.' },
  { id: 2, name: 'Solid Snake', bio: 'Solid Snake was one of the children born of the 1972 project Les Enfants Terribles. He was created as a clone of the world-renowned soldier Big Boss, along with his brother Liquid Snake. Initially a Green Beret, Snake was later inducted into the High-Tech Special Forces Unit FOXHOUND. Repeatedly tasked with disarming and destroying the latest incarnation of Metal Gear, a bipedal nuclear weapon-armed tank, Snake would thrice avert potential nuclear catastrophe, becoming a famed war hero.' },
  { id: 3, name: 'Liquid Snake', bio: 'Liquid Snake, was the leader of FOXHOUND during the Shadow Moses Incident. He was cloned from Big Boss DNA as part of the Les Enfants Terribles project, along with his brother Solid Snake.Liquid was led to believe that he had been created in order to express Big Boss recessive genetic traits, and as such, was inferior to Solid Snake who supposedly had received Big Boss dominant genes.Liquid therefore held a strong resentment towards Solid and wished to defeat him in combat, reclaiming what he felt was his birthright, and thus proving his superiority.' },
  { id: 4, name: 'Old Snake', bio: 'Solid Snake, but old. With an awesome moustache. Since he is a clone, he rapidly ages, he is 42 in MGS4' }
];
ReactDOM.render(
  < Accordion prop={character} />,
  document.querySelector('#root')
);
