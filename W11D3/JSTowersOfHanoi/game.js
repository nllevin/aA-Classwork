function Game (numDiscs = 3) {
  this.towers = Array.from( {length: 3}, (val, idx) => { 
    return idx === 0 ? Array.from( {length: numDiscs}, (val, idx) => idx + 1) : [];
  });
  this.status = [];
}

Game.prototype.promptMove = function (attemptMoveCallback) {
  this.print();
  console.log('');
  
  let startTowerIdx;
  let endTowerIdx;
  readline.question(`Select a tower to move from:\n`, input => {
    startTowerIdx = parseInt(input) - 1;
    console.log('');
    readline.question(`Select a tower to move to:\n`, input => {
      console.log('');
      endTowerIdx = parseInt(input) - 1;
      attemptMoveCallback(startTowerIdx, endTowerIdx);  
    });
  });
};

Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  return this.towers[endTowerIdx][0] > this.towers[startTowerIdx][0] ||
    this.towers[endTowerIdx].length === 0;
};

Game.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    this.towers[endTowerIdx].unshift(this.towers[startTowerIdx].shift());
    return true;
  } else {
    return false;
  }
};

Game.prototype.print = function () {
  console.clear();
  this.towers.forEach((tower, idx) => console.log(`${idx + 1}: ${tower.slice().reverse().join(' | ')}`));
  
  if (this.status.length > 0) {
    console.log(`Error: ${this.status}`);
    this.status = [];
  }
};

Game.prototype.isWon = function () {
  return this.towers[0].length === 0 && 
      this.towers.slice(1).some(tower => tower.length === 0);
};

Game.prototype.run = function (completionCallback) {
  let game = this;

  const moveCallback = function (startTowerIdx, endTowerIdx) {
    if (!game.move(startTowerIdx, endTowerIdx)) {
      game.status.push("Invalid move.");
    }

    if (game.isWon()) {
      completionCallback();
    } else {
      game.promptMove(moveCallback);
    }
  };

  game.promptMove(moveCallback);
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let game = new Game();
const completionCallback = () => {
  game.print();
  console.log('');
  console.log("You win");
  console.log('');
  readline.question("Play again? (y/n)\n", input => {
    if (input === "y") {
      game = new Game();
      game.run(completionCallback);
    } else {
      console.clear();
      console.log("Goodbye!\n");
      readline.close();
    }
  });
};
game.run(completionCallback);

