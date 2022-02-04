import React from 'react';
export default class SwampSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theStatus: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ theStatus: (!this.state.theStatus) });
  }

  render() {
    const status = this.state.theStatus;
    let layoutClass = 'onLayout';
    let inputClass = 'toggleOn';
    let shrek = 'https://faceswaponline.com/wp-content/uploads/2017/10/shrek-yelling.png';
    let shout = 'GET OUT OF MY SWAMP';
    let enviorment = 'container swamp';
    if (!status) {
      layoutClass = 'offLayout';
      inputClass = 'toggleOff';
      shrek = '';
      shout = '';
      enviorment = 'container';
    }
    return (
      <div className={enviorment}>
      <div className='row'>
      <div className={layoutClass}>
        <input onClick={this.handleClick} type="checkbox" className={inputClass} />
      </div>
      </div>
        <div className='row shrek'>
        <img src={shrek} />
        <h2>{shout}</h2>
      </div>
      </div>
    );
  }
}
