const MovingObject = require("./moving_object");
const Util = require("./util");
const Ship = require("./ship");
//const Bullet = require("./bullet");

const Asteroid = function (pos, game) {
  MovingObject.call(this, {
    pos: pos,
    vel: Util.randomVec(Asteroid.DEFAULTS.SPEED),
    radius: Asteroid.DEFAULTS.RADIUS,
    color: Asteroid.DEFAULTS.COLOR,
    game: game 
  });
};

Util.inherits(Asteroid, MovingObject);

Asteroid.DEFAULTS = {
  COLOR: "blue",
  RADIUS: 25,
  SPEED: 4
};

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  } //else if (otherObject instanceof Bullet) {
  //   this.game.remove(this);
  //   this.game.remove(otherObject);
  // }
};

module.exports = Asteroid;