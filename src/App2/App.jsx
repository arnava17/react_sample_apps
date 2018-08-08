import React from 'react';
import './App.css';

const element1 = (
  <h1 className="greeting">
    Hello, world! JSX
  </h1>
);


const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world! React.createElement'
);

function App() {
  return element2;
}

export default App;
