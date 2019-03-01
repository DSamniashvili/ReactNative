import React, { Component } from 'react';
import Game from './Game';


export default class Index extends Component {
  state = {
    gameId: 1,
  };

  resetGame = () => {
    this.setState((prevstate)=> {
     return {
      gameId: prevstate.gameId + 1
     };
    });
  }

  render() {
    return (
      <Game key={this.state.gameId} 
      randomNumberCount = {6} 
      initialSeconds = {10}
      onPlayAgain = {this.resetGame} />
    )
  }
}
