const MovingObject = require("./moving_object");
const Util = require("./util");
const Asteroid = require("./asteroid");

const Bullet = function (options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: [Bullet.CONSTANTS.SPEED * options.dir[0], Bullet.CONSTANTS.SPEED * options.dir[1]],
    radius: Bullet.CONSTANTS.RADIUS,
    color: options.color,
    game: options.game
  });
};

Util.inherits(Bullet, MovingObject);

Bullet.CONSTANTS = {
  SPEED: 10,
  RADIUS: 2
};

Bullet.prototype.isWrappable = false;

Bullet.prototype.collideWith = function (otherObject) {
  if (otherObject.constructor.name === 'Asteroid' /*instanceof Asteroid*/) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }
};

module.exports = Bullet;