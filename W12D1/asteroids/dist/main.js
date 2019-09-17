/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n//const Bullet = require(\"./bullet\");\n\nconst Asteroid = function (pos, game) {\n  MovingObject.call(this, {\n    pos: pos,\n    vel: Util.randomVec(Asteroid.DEFAULTS.SPEED),\n    radius: Asteroid.DEFAULTS.RADIUS,\n    color: Asteroid.DEFAULTS.COLOR,\n    game: game \n  });\n};\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.DEFAULTS = {\n  COLOR: \"blue\",\n  RADIUS: 25,\n  SPEED: 4\n};\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  } //else if (otherObject instanceof Bullet) {\n  //   this.game.remove(this);\n  //   this.game.remove(otherObject);\n  // }\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst Bullet = function (options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: [Bullet.CONSTANTS.SPEED * options.dir[0], Bullet.CONSTANTS.SPEED * options.dir[1]],\n    radius: Bullet.CONSTANTS.RADIUS,\n    color: options.color,\n    game: options.game\n  });\n};\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.CONSTANTS = {\n  SPEED: 10,\n  RADIUS: 2\n};\n\nBullet.prototype.isWrappable = false;\n\nBullet.prototype.collideWith = function (otherObject) {\n  if (otherObject.constructor.name === 'Asteroid' /*instanceof Asteroid*/) {\n    this.game.remove(otherObject);\n    this.game.remove(this);\n  }\n};\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst Game = function () {\n  this.asteroids = [];\n  this.addAsteroids();\n\n  this.ship = new Ship(this);\n  this.bullets = [];\n};\n\nGame.CONSTANTS = {\n  DIM_X: 1000,\n  DIM_Y: 600,\n  NUM_ASTEROIDS: 10\n};\n\nGame.prototype.allObjects = function () {\n  return this.asteroids.concat(this.ship).concat(this.bullets);\n};\n\nGame.prototype.addAsteroids = function () {\n  while (this.asteroids.length < Game.CONSTANTS.NUM_ASTEROIDS) {\n    this.asteroids.push( new Asteroid(this.randomPosition(), this) );\n  }\n};\n\nGame.prototype.randomPosition = function () {\n  return [Math.random() * Game.CONSTANTS.DIM_X, \n    Math.random() * Game.CONSTANTS.DIM_Y];\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, 1000, 600);\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, 1000, 600);\n  this.allObjects().forEach( object => object.draw(ctx) );\n};\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach(object => object.move());\n};\n\nGame.prototype.wrap = function (pos) {\n  let [x, y] = pos;\n  if (x <= 0) {\n    return [Game.CONSTANTS.DIM_X, y];\n  } else if (y <= 0) {\n    return [x, Game.CONSTANTS.DIM_Y];\n  } else if (x >= Game.CONSTANTS.DIM_X) {\n    return [0, y];\n  } else if (y >= Game.CONSTANTS.DIM_Y) {\n    return [x, 0];\n  } else {\n    return pos;\n  }\n};\n\nGame.prototype.checkCollisions = function() {\n  this.allObjects().forEach( (obj1, idx1) => {\n    this.allObjects().forEach( (obj2, idx2) => {\n      if (obj1.isCollidedWith(obj2) && idx1 !== idx2) {\n        obj1.collideWith(obj2);\n      }\n    });\n  });\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function (obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(obj), 1);\n  } else if (obj instanceof Bullet) {\n    this.bullets.splice(this.bullets.indexOf(obj), 1);\n  }\n};\n\nGame.prototype.isOutOfBounds = function (pos) {\n  let [x, y] = pos;\n  return x < 0 || x > Game.CONSTANTS.DIM_X || y < 0 || y > Game.CONSTANTS.DIM_Y;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst GameView = function(ctx) {\n  this.game = new Game();\n  this.ship = this.game.ship;\n  this.ctx = ctx;\n};\n\nGameView.prototype.start = function() {\n  this.bindKeyHandlers();\n  setInterval( () => {\n    this.game.step();\n    this.game.draw(this.ctx);\n  }, 20);\n};\n\nGameView.CONSTANTS = {\n  impulse: 0.7\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  key('up', this.ship.power.bind(this.ship, [0, -GameView.CONSTANTS.impulse]));\n  key('down', this.ship.power.bind(this.ship, [0, GameView.CONSTANTS.impulse]));\n  key('right', this.ship.power.bind(this.ship, [GameView.CONSTANTS.impulse, 0]));\n  key('left', this.ship.power.bind(this.ship, [-GameView.CONSTANTS.impulse, 0]));\n  key('space', this.ship.fireBullet.bind(this.ship));\n};\n\nmodule.exports = GameView;\n\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", event => {\n  context = document.getElementById(\"game-canvas\").getContext(\"2d\");\n  gv = new GameView(context);\n  gv.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst MovingObject = function (options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n};\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.strokeStyle = this.color;\n  ctx.fillStyle = this.color;\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.stroke();\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n  if ( this.game.isOutOfBounds(this.pos) ) {\n    if ( this.isWrappable ) {\n      this.pos = this.game.wrap(this.pos);\n    } else {\n      this.game.remove(this);\n    }\n  }\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  return Util.dist(this.pos, otherObject.pos) < this.radius + otherObject.radius;\n};\n\nMovingObject.prototype.collideWith = function (otherObject) {\n  \n};\n\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst Ship = function (game) {\n  MovingObject.call(this, {\n    pos: game.randomPosition(),\n    vel: [0, 0],\n    radius: Ship.CONSTANTS.RADIUS,\n    color: Ship.CONSTANTS.COLOR,\n    game: game\n  });\n};\n\nUtil.inherits(Ship, MovingObject);\n\nShip.CONSTANTS = {\n  RADIUS: 15,\n  COLOR: 'pink'\n};\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];\n};\n\nShip.prototype.fireBullet = function () {\n  let shipSpeed = Math.sqrt(this.vel[0] ** 2 + this.vel[1] ** 2);\n  this.game.bullets.push(new Bullet({\n    pos: this.pos,\n    dir: [this.vel[0] / shipSpeed, this.vel[1] / shipSpeed],\n    color: this.color,\n    game: this.game\n  }));\n};\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits: function (childClass, parentClass) {\n    function Surrogate () {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n\n  },\n\n  randomVec: function(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.cos(deg), Math.sin(deg)], length);\n  },\n\n  scale: function(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  dist: function(pos1, pos2) {\n    let [x1, y1] = pos1;\n    let [x2, y2] = pos2;\n    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });