import React, { Component } from 'react';
import './App.css';

import Avengers from './data/avengersCharacters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Avengers: Avengers
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.Avengers.map((avenger) => <h1>{avenger.name}</h1>)}
      </div>
    );
  }
}

export default App;
