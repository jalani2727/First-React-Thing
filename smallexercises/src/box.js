import React, { Component } from 'react';
import "./index.css"

   function Box(props) {
        return(
            <div className="box">
                {props.message}
            </div>
        )
    };



export default Box;