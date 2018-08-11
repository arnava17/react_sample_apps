import React, {Component} from 'react';


function Welcome(props) {
  let name;

  if(props.name) {
    name = props.name
  } else {
    name = 'World'
  }
  return (
      <h1>Hello {name}{props.children}</h1>
  );
}

class App extends Component {
  render() {


    return (
      <React.Fragment>



        <Welcome name={
            <p>Hi</p>
          }>
          Awesome
        </Welcome>







        <Welcome></Welcome>
        { true &&
          <p>Rendered if true</p>
        }
      </React.Fragment>
      )
  }
}

export default App;
