const Game = require("./game");

const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let game = new Game(reader);

const completionCallback = winner => {
  console.log(`${winner}'s wins!\n`);
  reader.close();
};

game.run(reader, completionCallback);