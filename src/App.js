import React, { Component } from 'react';
import './App.css';
import './reset.css';
import PageOne from './pageOne';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title>ReactProject</title>
        </header>
          < PageOne />
        
      </div>
    );
  }
}

export default App;
