import React, { Component } from 'react';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';
import './App.css';


const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class App extends Component{
  state = {
    score: 0,
    current: 0,
    rounds: 0,
    showGameOver: false
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    if(this.state.rounds >=5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;
    do {
      nextActive = getRandomInt(1, 4);
    } while (nextActive === this.state.current) // niin kauan kuin nextActive on sama kuin nykyinen "current" num, arvo uusi numero

    this.setState({
      current: nextActive,
    })

    // joka kerta kun arvotaan numero halutaan että se kiihtyy
    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    // this.timer = setTimeout(this.next.bind(this), this.pace);


    this.setState({
      rounds: this.state.rounds + 1
    });

    console.log(this.state.rounds);
    // nähdään konsolissa mitä tapahtuu
    // console.log(this.state.current);

    
  };


  clickHandler = (btnId) => {
    console.log('wow!', btnId);

    // peli loppuu kun väärä vastaus. jos klikattu väärin peli loppuu
    if(this.state.current !== btnId){
      this.endHandler();
      return;
    }

    this.setState({
        score: this.state.score + 1
    })

    this.setState({
      rounds: 0
    })
  };

  startHandler = () => {
    console.log('game started');
    this.next();
  }

  endHandler = () => {
    console.log('game stopped')
    clearTimeout(this.timer);
    this.setState({ showGameOver: true})

  }


  render(){
    return(
      <div className="App">
        <h1>Speed Game</h1>
        <Circle click={() => this.clickHandler(1)}
                buttonColor = '#4FC8BF'
                active = {this.state.current === 1}
        />
        <Circle click={() => this.clickHandler(2)}
                buttonColor = '#D63180'
                active = {this.state.current === 2}
        />
        <Circle click={() => this.clickHandler(3)}
                buttonColor = '#4893D4'
                active = {this.state.current === 3}
        />
        <Circle click={() => this.clickHandler(4)}
                buttonColor = '#FFF419'
                active = {this.state.current === 4}
        />
        <p>Your score is: {this.state.score}</p>
        <div>
          <button onClick={this.startHandler}>Start game</button>
          <button onClick={this.endHandler}>End game</button>
        </div>

        
        { this.state.showGameOver && <GameOver score={this.state.score} />} 
    </div>
    );
  }
};

export default App;
