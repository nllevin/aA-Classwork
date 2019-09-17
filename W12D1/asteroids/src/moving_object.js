const Util = require("./util");

const MovingObject = function (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.fillStyle = this.color;
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  if ( this.game.isOutOfBounds(this.pos) ) {
    if ( this.isWrappable ) {
      this.pos = this.game.wrap(this.pos);
    } else {
      this.game.remove(this);
    }
  }
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  return Util.dist(this.pos, otherObject.pos) < this.radius + otherObject.radius;
};

MovingObject.prototype.collideWith = function (otherObject) {
  
};

MovingObject.prototype.isWrappable = true;

module.exports = MovingObject;

