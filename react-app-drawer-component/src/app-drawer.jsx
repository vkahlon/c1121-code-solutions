import React from 'react';
export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theStatus: false };
    this.handleClick = this.handleClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleClick() {
    this.setState({ theStatus: (!this.state.theStatus) });
  }

  goBack() {
    const status = this.state.theStatus;
    if (status) {
      this.setState({ theStatus: (!this.state.theStatus) });
    }
  }

  render() {
    const status = this.state.theStatus;
    let hambBurger = 'fas fa-bars';
    let showGames = 'hidden';
    let overlay = 'hidden';
    if (status) {
      hambBurger = 'hidden';
      showGames = 'optionLayer';
      overlay = 'overlay';
    }
    return (
      <div className='row'>
          <i onClick={this.handleClick} className={hambBurger}></i>
          <div className='col-thirty'>
        <div className={showGames}>
          <div className='text-wrapper'>
          <b>Metal Gear Solid Games by Kojima</b>
          <p onClick={this.goBack}>Metal Gear Solid</p>
          <p onClick={this.goBack}>Metal Gear Solid 2</p>
          <p onClick={this.goBack}>Metal Gear Solid 3</p>
          <p onClick={this.goBack}>Metal Gear Solid 4</p>
          <p onClick={this.goBack}>Metal Gear Solid V: Phantom Pain</p>
          </div>
          </div>
          </div>
        <div onClick={this.goBack} className={overlay}>
        </div>
      </div>

    );
  }
}
