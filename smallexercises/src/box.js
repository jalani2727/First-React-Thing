import React, { Component } from 'react';
import "./index.css"

   function Box(props) {
        return(
            <div className="box">
            <button onClick={printMessage} > </button>
                {props.message}
            </div>
        )
    };

    function printMessage() {
        console.log("Hello from the box!");
    }

// function components don't render things (for now?)
export default Box;