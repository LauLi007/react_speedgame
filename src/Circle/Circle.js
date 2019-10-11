import React, { Component } from 'react';
import './Circle.css';

// function based component

const Circle = (props) => {
    return(
        <div className={'Circle' + (props.active ? ' active' : '')} 
             onClick={props.click} 
             style={{ backgroundColor: props.active ? props.active : props.buttonColor}}>
             


        </div>
    )
}

export default Circle;