import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Sign Up"></input>
      </form>
    );
  }
}
ReactDOM.render(
  < NewsletterForm />,
  document.querySelector('#root')
);
