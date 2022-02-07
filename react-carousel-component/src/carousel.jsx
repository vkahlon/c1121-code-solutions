import React from 'react';
const pokedex = [
  { pokemonID: 0, image: '../images/001.png' },
  { pokemonID: 1, image: '../images/004.png' },
  { pokemonID: 2, image: '../images/007.png' },
  { pokemonID: 3, image: '../images/025.png' },
  { pokemonID: 4, image: '../images/039.png' }
];
export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: 0 };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }

  handleRightClick() {
    const currentView = this.state.image;
    const limit = pokedex.length - 1;
    if (currentView === limit) {
      this.setState({ image: 0 });
    } else {
      this.setState({ image: this.state.image + 1 });
    }
  }

  handleLeftClick() {
    const currentView = this.state.image;
    const limit = pokedex.length - 1;
    if (currentView === 0) {
      this.setState({ image: limit });
    } else {
      this.setState({ image: this.state.image - 1 });
    }
  }

  render() {
    const image = this.state.image;
    const displayImage = <img className='img-wrapper' src={pokedex[image].image} alt='logo' />;
    const filledCircle = <i className="fas fa-circle"></i>;
    const emptyCircle = <i className="far fa-circle"></i>;

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
              {filledCircle}
              {emptyCircle}
              {emptyCircle}
              {emptyCircle}
              {emptyCircle}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
