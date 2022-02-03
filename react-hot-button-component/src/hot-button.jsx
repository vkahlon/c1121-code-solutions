import React from 'react';
export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ theCount: this.state.theCount + 1 });
  }

  render() {
    const counter = this.state.theCount;
    let temp;
    let alive = '';
    if (counter < 3) {
      temp = '';
    } else if (counter < 6) {
      temp = 'cold';
    } else if (counter < 9) {
      temp = 'cool';
    } else if (counter < 12) {
      temp = 'fine';
    } else if (counter < 15) {
      temp = 'heat';
    } else if (counter < 18) {
      temp = 'hot';
    } else if (counter >= 18) {
      temp = 'kaput';
      alive = 'You pushed your luck. You are Kaput!';
    }
    return (
        <div>
          <button onClick={this.handleClick} className={temp}>Hot Button</button>
          <span>Clicks: {counter}</span>
          <h2> {alive} </h2>
        </div>
    );
  }
}
