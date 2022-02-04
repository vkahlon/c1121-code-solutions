import React from 'react';
export default class HotButton extends React.Component {
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
    if (!status) {
      layoutClass = 'offLayout';
      inputClass = 'toggleOff';
    }
    return (
      <div className='container'>
      <div className='row'>
      <div className={layoutClass}>
        <input onClick={this.handleClick} type="checkbox" className={inputClass} />
      </div>
      </div>
      </div>
    );
  }
}
