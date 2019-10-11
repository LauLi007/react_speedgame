import React from 'react';
import './GameOver.css';


const closeHandler = () => {
    window.location.reload();
}


const GameOver = (props) => {
    return (
        <div id="result">
            <div className="gameoverBox">
                <p id="gameover">Game over! Your final score was: {props.score}</p>
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    )
}



export default GameOver; 
