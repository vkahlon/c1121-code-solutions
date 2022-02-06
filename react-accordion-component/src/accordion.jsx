import React from 'react';
const character = [
  { id: 1, name: 'Big Boss', bio: 'Big Boss, serving as the central character of the Metal Gear series of video games, as well as the series initial protagonist, chronologically speaking.He founded U.S.Army Special Forces Unit FOXHOUND, along with the mercenary company Militaires Sans Frontières, and was one of the founding members of the Patriots.Big Boss later established the military states of Outer Heaven and Zanzibar Land as bases for his companies, in order to realize his ambitions of creating a nation for soldiers.' },
  { id: 2, name: 'Solid Snake', bio: 'Solid Snake was one of the children born of the 1972 project Les Enfants Terribles. He was created as a clone of the world-renowned soldier Big Boss, along with his brother Liquid Snake. Initially a Green Beret, Snake was later inducted into the High-Tech Special Forces Unit FOXHOUND. Repeatedly tasked with disarming and destroying the latest incarnation of Metal Gear, a bipedal nuclear weapon-armed tank, Snake would thrice avert potential nuclear catastrophe, becoming a famed war hero.' },
  { id: 3, name: 'Liquid Snake', bio: 'Liquid Snake, was the leader of FOXHOUND during the Shadow Moses Incident. He was cloned from Big Boss DNA as part of the Les Enfants Terribles project, along with his brother Solid Snake.Liquid was led to believe that he had been created in order to express Big Boss recessive genetic traits, and as such, was inferior to Solid Snake who supposedly had received Big Boss dominant genes.Liquid therefore held a strong resentment towards Solid and wished to defeat him in combat, reclaiming what he felt was his birthright, and thus proving his superiority.' },
  { id: 4, name: 'Old Snake', bio: 'Solid Snake, but old. Since he is a clone of Big Boss, he ages rapidly.' }
];

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (id === this.state.view) {
      this.setState({ view: 0 });
    } else {
      this.setState({ view: id });
    }
  }

  render() {
    const view = this.state.view;

    const characterList = character.map(snakes => {
      if (view === snakes.id) {
        return <div key={snakes.id}>
          <div onClick={() => { this.handleClick(snakes.id); }}
            className="header" name={snakes.name} >{snakes.name}</div>
          <div className="description">{snakes.bio}</div>
        </div>;
      } else {
        return <div key={snakes.id}>
          <div onClick={() => { this.handleClick(snakes.id); }}
            className="header" name={snakes.name} >{snakes.name}</div>
        </div>;
      }
    }

    );
    return (
     <div className='container'>
        {characterList}
     </div>
    );
  }
}
