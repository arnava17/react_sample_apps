import React from 'react';
import './App.css';

const element1 = (
  <h1 className="greeting">
    Hello, world! JSX
  </h1>
);

let element = <h2><h1>adadsa</h1>Arnava</h2>;
const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  "Hello"
);

function App() {
  return element1;
}

export default App;
