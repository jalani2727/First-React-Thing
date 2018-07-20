import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./box.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
        </header>
      </div>
    );
  }
}

export default App;
