import React, {Component, Fragment} from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      b1:false,
      b2:false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    let state = this.state;
    state[btn] = !state[btn];
    this.setState(this.state);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state);
  //   console.log(nextState);
  //   console.log(this.state === nextState);
  //   return this.state === nextState;
  // }

  render() {
    return (
      <Fragment>
        <button onClick={() => this.handleClick('b1')}>Button 1</button>
        <button onClick={() => this.handleClick('b2')}>Button 2</button>
        { this.state.b1 &&
          <p>B1</p>
        }
        {
          this.state.b2 &&
            <p>B2</p>
        }
      </Fragment>
    )
  }
}

export default App;
