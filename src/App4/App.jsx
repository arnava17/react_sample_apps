import React, {Component} from 'react';


class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(this.updateTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClick() {
    alert('The Button Was Clicked');
  }

  updateTime() {
    const time = new Date().toLocaleTimeString();
    this.setState({
      time
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>It is {this.state.time}</h1>
        <button onClick={this.handleClick}>Alert</button>
      </div>
    );
  }
}

export default Clock;
