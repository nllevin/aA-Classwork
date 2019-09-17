const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");

const Game = function () {
  this.asteroids = [];
  this.addAsteroids();

  this.ship = new Ship(this);
  this.bullets = [];
};

Game.CONSTANTS = {
  DIM_X: 1000,
  DIM_Y: 600,
  NUM_ASTEROIDS: 10
};

Game.prototype.allObjects = function () {
  return this.asteroids.concat(this.ship).concat(this.bullets);
};

Game.prototype.addAsteroids = function () {
  while (this.asteroids.length < Game.CONSTANTS.NUM_ASTEROIDS) {
    this.asteroids.push( new Asteroid(this.randomPosition(), this) );
  }
};

Game.prototype.randomPosition = function () {
  return [Math.random() * Game.CONSTANTS.DIM_X, 
    Math.random() * Game.CONSTANTS.DIM_Y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, 1000, 600);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 600);
  this.allObjects().forEach( object => object.draw(ctx) );
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(object => object.move());
};

Game.prototype.wrap = function (pos) {
  let [x, y] = pos;
  if (x <= 0) {
    return [Game.CONSTANTS.DIM_X, y];
  } else if (y <= 0) {
    return [x, Game.CONSTANTS.DIM_Y];
  } else if (x >= Game.CONSTANTS.DIM_X) {
    return [0, y];
  } else if (y >= Game.CONSTANTS.DIM_Y) {
    return [x, 0];
  } else {
    return pos;
  }
};

Game.prototype.checkCollisions = function() {
  this.allObjects().forEach( (obj1, idx1) => {
    this.allObjects().forEach( (obj2, idx2) => {
      if (obj1.isCollidedWith(obj2) && idx1 !== idx2) {
        obj1.collideWith(obj2);
      }
    });
  });
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function (obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(obj), 1);
  } else if (obj instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(obj), 1);
  }
};

Game.prototype.isOutOfBounds = function (pos) {
  let [x, y] = pos;
  return x < 0 || x > Game.CONSTANTS.DIM_X || y < 0 || y > Game.CONSTANTS.DIM_Y;
};

module.exports = Game;