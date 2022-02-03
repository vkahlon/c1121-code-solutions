import React from 'react';
import ReactDOM from 'react-dom';

class NowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked === false) {
      return (
        <button onClick={this.handleClick}>CLICK NOW!</button>
      );
    } return (
      <button onClick={this.handleClick}>THERE!</button>
    );
  }
}
ReactDOM.render(
  < NowButton />,
  document.querySelector('#root')
);
