import React from 'react';
const pokedex = [
  { pokemonID: 0, image: '../images/001.png' },
  { pokemonID: 1, image: '../images/004.png' },
  { pokemonID: 2, image: '../images/007.png' },
  { pokemonID: 3, image: '../images/025.png' },
  { pokemonID: 4, image: '../images/039.png' }
];
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: 0 };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  handleRightClick() {
    clearInterval(this.timer);
    const currentView = this.state.image;
    const limit = pokedex.length - 1;
    if (currentView === limit) {
      this.setState({ image: 0 });
    } else {
      this.setState({ image: this.state.image + 1 });
    }
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  handleLeftClick() {
    clearInterval(this.timer);
    const currentView = this.state.image;
    const limit = pokedex.length - 1;
    if (currentView === 0) {
      this.setState({ image: limit });
    } else {
      this.setState({ image: this.state.image - 1 });
    }
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  handleCircleClick(id) {
    clearInterval(this.timer);
    this.setState({ image: id });
    const limit = pokedex.length - 1;
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  componentDidMount() {
    const limit = pokedex.length - 1;
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  render() {
    const image = this.state.image;
    const displayCircle = pokedex.map(pokemon => {
      if (image === pokemon.pokemonID) {
        return <i onClick={() => { this.handleCircleClick(pokemon.pokemonID); }} className="fas fa-circle"></i>;
      } else {
        return <i onClick={() => { this.handleCircleClick(pokemon.pokemonID); }} className="far fa-circle"></i>;
      }
    });
    const displayImage = <img className='img-wrapper' src={pokedex[image].image} alt='logo' />;
    // const pokeList = null;
    return (
      <div className='container outer-decoration'>
        <div className='row quick-wrapper'>
          <div className='column-twenty'>
            <i onClick={this.handleLeftClick}className='fas fa-angle-left row icon-wrapper'></i>
          </div>
          <div className='column-eighty'>
            {displayImage}
          </div>
          <div className='column-twenty'>
            <i onClick={this.handleRightClick}className='fas fa-angle-right row icon-wrapper'></i>
          </div>
        </div>
        <div className='row quick-wrapper'>
          <div className='column-full'>
            <div className='row quick-wrapper bullets'>
              {displayCircle}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
