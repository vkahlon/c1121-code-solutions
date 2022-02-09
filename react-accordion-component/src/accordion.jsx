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

    const topicList = this.props.prop.map(topics => {
      if (view === topics.id) {
        return <div key={topics.id}>
          <div onClick={() => { this.handleClick(topics.id); }}
            className="header" name={topics.name} >{topics.name}</div>
          <div className="description">{topics.bio}</div>
        </div>;
      } else {
        return <div key={topics.id}>
          <div onClick={() => { this.handleClick(topics.id); }}
            className="header" name={topics.name} >{topics.name}</div>
        </div>;
      }
    }

    );
    return (
     <div className='container'>
        {topicList}
     </div>
    );
  }
}
