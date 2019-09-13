// let board = Array.from({ length = 3 }, (value, index) => Array.from({ length = 3}));

class Board {
  constructor () {
    this.rows = Array.from({ length: 3 }, (value, index) => Array.from({ length: 3}));
    this.players = [];
    this.currentPlayer = 'x';
    this.errors = [];
  }

  won () {
    return this.rows.some( row => this.allThreeSame(row) )
      || this.cols().some( col => this.allThreeSame(col) )
      || this.diags().some( diag => this.allThreeSame(diag) );
  }

  allThreeSame (triplet) {
    return triplet.every(tile => tile === 'x') || triplet.every(tile => tile === 'o');
  }

  cols () {
    return this.rows.map((row, index) => {
      let col = [];
      this.rows.forEach(row => col.push(row[index]));
      return col;
    });
  }

  diags () {
    return [
      [this.rows[0][0], this.rows[1][1], this.rows[2][2]],
      [this.rows[0][2], this.rows[1][1], this.rows[2][0]]
    ];
  }

  winner () {
    if (this.won()) {
      return this.currentPlayer;
    } else {
      return -1;
    }
  }

  empty (pos) {
    let row, col;
    [row, col] = pos;
    return !this.rows[row][col];
  }

  switchPlayer () {
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
  }

  placeMark (pos, mark) {
    let row, col;
    [row, col] = pos;
    if ( this.empty(pos) ) {
      this.rows[row][col] = mark;
      return true;
    } else {
      return false;
    }
  }

  print () {
    console.clear();
    this.rows.forEach( (row, i) => {
      let rowStr = row.map( tile => {
        return tile ? ` ${ tile } ` : `   `;
      }).join('|');
      console.log(`${rowStr}`);
      if (i < 2) {
        console.log('---+---+---');
      } else {
        console.log('\n');
      }
    });
    if (this.errors.length > 0) {
      console.log(this.errors);
      console.log('\n');
    }
    this.errors = [];
  }

}

module.exports = Board;