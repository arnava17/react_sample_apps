import React, {Component} from 'react';


class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    this.i = 0;
    this.sound = "Meow";
    const that = this;
    this.hc = this.handleClick.bind(that);
  }

  componentDidMount() {
    console.log("mounted");
    this.timerID = setInterval(this.updateTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClick() {
    console.log(this.sound);
    alert('The Button Was Clicked');
  }

  updateTime() {
    const time = new Date().toLocaleTimeString();
    this.i++;
    console.log(this.sound+this.i);
    this.setState({
      time:time
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>It is {this.state.time}</h1>
        <button onClick={this.hc}>Alert</button>
      </div>
    );
  }
}

export default Clock;
