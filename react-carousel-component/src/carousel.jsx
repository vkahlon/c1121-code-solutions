import React from 'react';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: 0 };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  handleRightClick() {
    clearInterval(this.timer);
    const currentView = this.state.image;
    const limit = this.props.prop.length - 1;
    if (currentView === limit) {
      this.setState({ image: 0 });
    } else {
      this.setState({ image: this.state.image + 1 });
    }
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  handleLeftClick() {
    clearInterval(this.timer);
    const currentView = this.state.image;
    const limit = this.props.prop.length - 1;
    if (currentView === 0) {
      this.setState({ image: limit });
    } else {
      this.setState({ image: this.state.image - 1 });
    }
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  handleCircleClick(id) {
    clearInterval(this.timer);
    this.setState({ image: id });
    const limit = this.props.prop.length - 1;
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  componentDidMount() {
    const limit = this.props.prop.length - 1;
    this.timer = setInterval(() => {
      const currentView = this.state.image;
      if (currentView === limit) {
        return this.setState({ image: 0 });
      } else {
        return this.setState({ image: this.state.image + 1 });
      }
    }, 1000);
  }

  render() {
    const image = this.state.image;
    const displayCircle = this.props.prop.map(object => {
      if (image === object.id) {
        return <i key={object.id} onClick={() => { this.handleCircleClick(object.id); }} className="fas fa-circle"></i>;
      } else {
        return <i key={object.id} onClick={() => { this.handleCircleClick(object.id); }} className="far fa-circle"></i>;
      }
    });
    return (
      <div className='container outer-decoration'>
        <div className='row quick-wrapper'>
          <div className='column-twenty'>
            <i onClick={this.handleLeftClick}className='fas fa-angle-left row icon-wrapper'></i>
          </div>
          <div className='column-eighty'>
            <img className='img-wrapper' src={this.props.prop[image].image} alt='logo' />
          </div>
          <div className='column-twenty'>
            <i onClick={this.handleRightClick}className='fas fa-angle-right row icon-wrapper'></i>
          </div>
        </div>
        <div className='row quick-wrapper'>
          <div className='column-full'>
            <div className='row quick-wrapper bullets'>
              {displayCircle}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
