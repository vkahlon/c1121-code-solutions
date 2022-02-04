import React from 'react';
export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { second: 0, theStatus: false };
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleClick() {
    const status = this.state.theStatus;
    if (!status) {
      this.timer = setInterval(() => { return this.setState({ second: this.state.second + 1 }); }, 1000);
    } else {
      clearInterval(this.timer);
    }
    this.setState({ theStatus: (!this.state.theStatus) });
  }

  resetTimer() {
    const status = this.state.theStatus;
    if (!status) {
      this.setState({ second: 0 });
    }
  }

  render() {
    const time = this.state.second;
    const status = this.state.theStatus;
    let button = 'fas fa-pause';
    if (!status) {
      button = 'fas fa-play';
    }
    return (
      <div className='container'>
      <div className='row'>
          <div onClick={this.resetTimer} className="circle">{time}</div>
      </div>
      <div className='row'>
      <i onClick={this.handleClick} className={button}></i>
      </div>
      </div>

    );
  }
}
