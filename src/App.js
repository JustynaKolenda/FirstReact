import React, { Component } from 'react';
import './App.css';
import './reset.css';
import PageOne from './pageOne';
import Heder from './heder';



class App extends Component {
  render() {
    return (
      <div className="App">
          < Heder />
          < PageOne />
        
      </div>
    );
  }
}

export default App;
