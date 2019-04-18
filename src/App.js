import React, { Component } from 'react';

import './App.css';
import HomeWrapper from './components/home-wrapper/home-wrapper';

class App extends Component {
  render() {
    return (
      <div className="test-task-app">
        <header>
          <h1>Look your home!</h1>
        </header>
        <div className="container">
          <HomeWrapper />
        </div>
      </div>
    );
  }
}

export default App;
