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

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\nconst CONSTANTS = {\n  GRAVITY: 0.5,\n  FLAP_SPEED: -8,\n  TERMINAL_VEL: 12,\n  BIRD_WIDTH: 40,\n  BIRD_HEIGHT: 30\n};\n\nclass Bird {\n  constructor(dimensions) {\n    this.velocity = 0;\n    this.canvasWidth = dimensions.width;\n    this.canvasHeight = dimensions.height;\n    this.xPos = this.canvasWidth / 3;\n    this.yPos = this.canvasHeight / 2;\n  }\n\n  drawBird(context) {\n    context.fillStyle = 'yellow';\n    context.fillRect(this.xPos, this.yPos, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\n  }\n\n  animate(context) {\n    this.move();\n    this.drawBird(context);\n  }\n  \n  move() {\n    this.yPos += this.velocity;\n    if (this.velocity <= CONSTANTS.TERMINAL_VEL) {\n      this.velocity += CONSTANTS.GRAVITY;\n    }\n  }\n\n  flap() {\n    this.velocity = CONSTANTS.FLAP_SPEED;\n  }\n\n  getBounds() {\n    return {\n      top: this.yPos,\n      bottom: this.yPos + CONSTANTS.BIRD_HEIGHT,\n      left: this.xPos,\n      right: this.xPos + CONSTANTS.BIRD_WIDTH\n    };\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas) {\n    canvas.addEventListener('mousedown', this.click.bind(this));\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.highScore = 0;\n    this.restart();\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n    this.checkGameOver();\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n\n  checkGameOver() {\n    if ( this.level.collidesWith(this.bird.getBounds()) ) {\n      if (this.level.score > this.highScore ) {\n        this.highScore = this.level.score;\n      }\n      setTimeout( () => {\n        alert(`Game over!\\nFinal score: ${this.level.score}\\nHigh score: ${this.highScore}`); \n        this.restart(); \n      });\n    }\n  }\n\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  click() {\n    if (!this.running) {\n      this.running = true;\n      this.animate();\n    }\n    this.bird.flap();\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  const canvas = document.getElementById('bird-game');\n  new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  PIPE_SPACING: 300,\n  PIPE_GAP: 150,\n  PIPE_MIN_DIST_FROM_EDGE: 50,\n  PIPE_VELOCITY: 3.5,\n  PIPE_WIDTH: 80\n};\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.score = 0;\n    this.pipes = Array.from( \n      { length: 3 }, \n      (_, idx) => this.makePipe(idx * CONSTANTS.PIPE_SPACING)\n    );\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  makePipe(startShift = 0) {\n    return { \n      scored: false,\n      xPos: (3 * CONSTANTS.PIPE_SPACING - CONSTANTS.PIPE_WIDTH) + startShift, \n      topOfGapPos: \n        Math.random() \n          * (this.dimensions.height - CONSTANTS.PIPE_GAP - CONSTANTS.PIPE_MIN_DIST_FROM_EDGE)\n          + CONSTANTS.PIPE_MIN_DIST_FROM_EDGE\n    };\n  }\n\n  animate(ctx) {\n    this.movePipes();\n    this.updateScore();\n    this.drawBackground(ctx);\n    this.drawPipes(ctx);\n    if (this.pipes[0].xPos < 3 * CONSTANTS.PIPE_SPACING - CONSTANTS.PIPE_WIDTH - 2 * CONSTANTS.PIPE_VELOCITY) {\n      this.drawScore(ctx);\n    }\n  }\n\n  updateScore() {\n    this.pipes.forEach( pipe => {\n      if (pipe.scored === false && pipe.xPos + CONSTANTS.PIPE_WIDTH < this.dimensions.width / 3) {\n        pipe.scored = true;\n        this.score += 1;\n      }\n    });\n  }\n\n  drawScore(ctx) {\n    ctx.font = '50px Futura';\n    ctx.strokeText(this.score, this.dimensions.width / 2 - 15, 100);\n  }\n\n  movePipes() {\n    this.pipes.forEach( pipe => pipe.xPos -= CONSTANTS.PIPE_VELOCITY );\n    if (this.pipes[0].xPos <= -CONSTANTS.PIPE_WIDTH) {\n      this.pipes.shift();\n      this.pipes.push(this.makePipe());\n    }\n  }\n\n  drawPipes(ctx) {\n    this.pipes.forEach( pipe => {\n      ctx.fillStyle = 'green';\n      ctx.fillRect(pipe.xPos, 0, CONSTANTS.PIPE_WIDTH, pipe.topOfGapPos);\n      ctx.fillRect(\n        pipe.xPos, \n        pipe.topOfGapPos + CONSTANTS.PIPE_GAP,\n        CONSTANTS.PIPE_WIDTH,\n        this.dimensions.height - (pipe.topOfGapPos + CONSTANTS.PIPE_GAP)\n      );\n    });\n  }\n\n  collidesWith(bounds) {\n    return bounds.bottom >= this.dimensions.height\n      || this.pipes.some( pipe => {\n        return bounds.right >= pipe.xPos && bounds.left <= pipe.xPos + CONSTANTS.PIPE_WIDTH\n          && ( bounds.top <= pipe.topOfGapPos || bounds.bottom >= pipe.topOfGapPos + CONSTANTS.PIPE_GAP)\n      });\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });