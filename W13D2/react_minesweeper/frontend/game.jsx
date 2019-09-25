import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";

class Game extends React.Component {
  constructor() {
    super();
    this.state = { board: new Minesweeper.Board(9, 10) };
    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateGame(tile, flag) {
    flag ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  } 

  resetGame() {
    this.setState({ board: new Minesweeper.Board(9, 10) })
  }

  render() {
    let resultText = '';
    let className = 'hidden'
    
    if (this.state.board.won()) {
      resultText = 'You Won!';
      className = 'modal-screen';
    } else if (this.state.board.lost()) {
      resultText = 'You Lost ;(';
      className = 'modal-screen';  
    }

    return (
      <div className="game">
        <section className={ className }>
          <form>
            <h1>{ resultText }</h1>
            <button onClick={ this.resetGame }>Play Again?</button>
          </form>
        </section>
        <Board 
          board={ this.state.board }
          updateGame={ this.updateGame }
        />
      </div>
    );
  }
}


export default Game; 