import React, { Component } from 'react';

import './App.css';
import Box from "./box.js";

class App extends Component {
  render() {
    return (
      <div>
          <Box message="Monday"/>
          <Box message="Tuesday"/>
          <Box message="Wednesday" />
          <Box message="Thursday" />
          <Box message="Friday" />
      </div>
    );
  }
}

export default App;


// How is this rendering in index.html without a reference to the root ID? 
// is npm start just rendering what in App.js or something?

// If ^ is not the case,
// Do class components not need to put ReactDOM.render(<Box />, document.detElementById('root'))?
// Where is this being imported?