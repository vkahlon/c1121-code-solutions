import React from 'react';
export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let isValidated = 'fas fa-times';
    const value = this.state.value;
    let errorMessage = '';
    if (value === '') {
      errorMessage = 'A password is required.';
    }
    if ((value.length > 0) && (value.length < 8)) {
      errorMessage = 'Your password is too short.';
    } if (value.length > 8) {
      errorMessage = '';
      isValidated = 'fas fa-check';
    }
    return (
      <form>
        <label>Password</label>
        <div>
          <input type="password" value={this.state.value} onChange={this.handleChange}></input>
          <i className={isValidated}></i>
          <p>{errorMessage}</p>
        </div>
      </form>
    );
  }
}
