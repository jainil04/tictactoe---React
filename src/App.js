import React, { Component } from 'react';
import  Game  from './components/Game';
import Header from './components/Header';


import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Game/>
      </div>
      
    );
  }
}

export default App;
