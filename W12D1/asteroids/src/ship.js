const MovingObject = require('./moving_object');
const Util = require("./util");
const Bullet = require("./bullet");

const Ship = function (game) {
  MovingObject.call(this, {
    pos: game.randomPosition(),
    vel: [0, 0],
    radius: Ship.CONSTANTS.RADIUS,
    color: Ship.CONSTANTS.COLOR,
    game: game
  });
};

Util.inherits(Ship, MovingObject);

Ship.CONSTANTS = {
  RADIUS: 15,
  COLOR: 'pink'
};

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function(impulse) {
  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
};

Ship.prototype.fireBullet = function () {
  let shipSpeed = Math.sqrt(this.vel[0] ** 2 + this.vel[1] ** 2);
  this.game.bullets.push(new Bullet({
    pos: this.pos,
    dir: [this.vel[0] / shipSpeed, this.vel[1] / shipSpeed],
    color: this.color,
    game: this.game
  }));
};

module.exports = Ship;