import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (id === this.state.view) {
      this.setState({ view: 0 });
    } else {
      this.setState({ view: id });
    }
  }

  render() {
    const view = this.state.view;

    const characterList = this.props.prop.map(snakes => {
      if (view === snakes.id) {
        return <div key={snakes.id}>
          <div onClick={() => { this.handleClick(snakes.id); }}
            className="header" name={snakes.name} >{snakes.name}</div>
          <div className="description">{snakes.bio}</div>
        </div>;
      } else {
        return <div key={snakes.id}>
          <div onClick={() => { this.handleClick(snakes.id); }}
            className="header" name={snakes.name} >{snakes.name}</div>
        </div>;
      }
    }

    );
    return (
     <div className='container'>
        {characterList}
     </div>
    );
  }
}
