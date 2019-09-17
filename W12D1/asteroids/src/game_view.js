const Game = require("./game");


const GameView = function(ctx) {
  this.game = new Game();
  this.ship = this.game.ship;
  this.ctx = ctx;
};

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  setInterval( () => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
};

GameView.CONSTANTS = {
  impulse: 0.7
};

GameView.prototype.bindKeyHandlers = function() {
  key('up', this.ship.power.bind(this.ship, [0, -GameView.CONSTANTS.impulse]));
  key('down', this.ship.power.bind(this.ship, [0, GameView.CONSTANTS.impulse]));
  key('right', this.ship.power.bind(this.ship, [GameView.CONSTANTS.impulse, 0]));
  key('left', this.ship.power.bind(this.ship, [-GameView.CONSTANTS.impulse, 0]));
  key('space', this.ship.fireBullet.bind(this.ship));
};

module.exports = GameView;


