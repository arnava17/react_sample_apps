import React from 'react';
import './App.css'

// function App() {
//   return <h1>Hello World</h1>
// }

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <p>Hello World</p>
        <p>
          <a href="https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658" target="_blank">
            Set up your react app from scratch
          </a>
        </p>
        <p>
          <a href="http://blog.teamtreehouse.com/getting-started-create-react-app-tool" target="_blank">
            Use create-react-app
          </a>
        </p>
      </div>
    )
  }
}

export default App;
