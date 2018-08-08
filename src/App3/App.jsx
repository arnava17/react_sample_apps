import React from 'react';

class Welcome extends React.Component {

  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

function Bye(props) {
  return <h1>Goodbye {props.name}</h1>
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Welcome name="Tyrion"></Welcome>
        <Bye name="Lannister"></Bye>
      </div>
    )
  }
}

export default App;
