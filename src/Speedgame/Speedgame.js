import React, { Component } from 'react';
import './Speedgame.css';

class Speedgame extends Component{
    

    render(){
        return(
            <div className="container">
                <p className="title">Speedgame</p>
                <div className="circle_container">
                    <div className="circle first"></div>
                </div>
                <div className="button_container">
                    <button className="start_button">Start game</button>
                    <button className="stop_button">Stop game</button>
                </div>
            </div>
        )
    
    }
}

export default Speedgame;