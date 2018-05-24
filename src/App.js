import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCointainer from "./Containers/WeatherContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherCointainer/>
      </div>
    );
  }
}

export default App;
