import React, { Component } from 'react';

import './App.css';
import Box from "./box.js";
import Countdown from "./Countdown.js";


function deleteCounterById(theID) {
  console.log(theID);
}

function convertNumToCounter(obj) {
  return (
    <Countdown
      key={obj.id}
      id={obj.id}
      initialValue={obj.value}
      doClick={deleteCounterById}
    />
  );
}



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


// How is this rendering in index.html without a reference to the root ID? - index.js is importing App.js and then index.js is rendring <App /> to the root id in the index.html
// is npm start just rendering what in App.js or something? -Yes


// Where is this being imported?
// ANSWER: index.js