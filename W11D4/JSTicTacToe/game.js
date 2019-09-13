const Board = require('./board');

class Game {
  constructor(reader) {
    this.reader = reader;
    this.board = new Board();
  }

  run (reader, completionCallback) {
    this.board.print();
    let prompt = `Enter coordinates, player ${this.board.currentPlayer}'s, e.g. '0,0'\n`;
    reader.question(prompt, coords => {
      let pos = coords.split(",").map(coord => parseInt(coord));
      if (this.board.placeMark(pos, this.board.currentPlayer)) {
        if (this.board.won()) {
          this.board.print();
          completionCallback(this.board.winner());
        } else {
          this.board.switchPlayer();
          this.run(reader, completionCallback);
        }
      } else {
        this.board.errors.push('That position is already taken!');
        this.run(reader, completionCallback);
      }
    });
  }
}

module.exports = Game;