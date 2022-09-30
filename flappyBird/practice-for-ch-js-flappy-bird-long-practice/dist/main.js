/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FlappyBird)\n/* harmony export */ });\n/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ \"./src/level.js\");\n\n\nclass FlappyBird {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    canvas.addEventListener('mousedown', this.click.bind(this))\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n    if (this.running === true){\n      requestAnimationFrame(this.animate.bind(this, this.ctx));\n    }\n  }\n\n  restart(){\n    this.level = new _level_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions)\n    this.bird = new Bird(this.dimensions)\n    this.running = false;\n    this.play();\n  }\n\n  play(){\n    this.running = true;\n    this.animate();\n  }\n\n  click(){\n    if (this.running === true){\n      this.bird.flap();\n    } else {\n      this.play();\n    }\n  }\n}\nclass Bird {\n  constructor(dimensions){\n    this.velocity = 0;\n    this.dimensions = dimensions;\n    this.positiony = this.dimensions.height/2;\n    this.positionx = this.dimensions.width/3;\n  }\n  \n\n  animate(ctx){\n    this.move();\n    this.drawBird(ctx);\n  }\n\n  move(){\n    this.positiony += this.velocity;\n    this.velocity += CONSTANTS.GRAVITY;\n  }\n\n  flap(){\n    this.velocity = -8;\n  }\n\n  drawBird(ctx){\n    ctx.fillStyle = 'yellow'\n    ctx.fillRect(this.positionx, this.positiony, 40, 50);\n  }\n\n  getBounds(){\n    \n  }\n}\n\n\nconst CONSTANTS = {\n  GRAVITY: 0.8,\n  FLAP_SPEED: -8,\n  TERMINAL_VEL: 12,\n  BIRD_WIDTH: 40,\n  BIRD_HEIGHT: 30\n};\n\n//# sourceURL=webpack://flappy-bird-long-practice/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\n\nconst flappy = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\nwindow.addEventListener('DOMContentLoaded',()=> flappy.restart());\n// flappy.restart()\n\n\n\n//# sourceURL=webpack://flappy-bird-long-practice/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = this.createPipes();\n  }\n\n  createPipes() {\n    const startingPipes = [];\n    let currentPipe;\n    for (let i = 0 ; i < 3 ; i++){\n      currentPipe = new Pipe(this.dimensions);\n      startingPipes.push(currentPipe);\n    }\n    return startingPipes;\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  animate(ctx){\n    this.drawBackground(ctx);\n    this.pipes.forEach((pipe) => pipe.animate(ctx)); \n    this.movePipes(this.pipes);\n  }\n\n  movePipes(arrayOfPipes){\n    this.moveOnePipe(arrayOfPipes[0]);\n    let newPipe = new Pipe(this.dimensions)\n    if (arrayOfPipes[0].positionx <= LCONSTANTS.HORIZ_SPACING - 100){\n      this.moveOnePipe(arrayOfPipes[1]);\n      if (arrayOfPipes[1].positionx <= LCONSTANTS.HORIZ_SPACING - 100){\n        this.moveOnePipe(arrayOfPipes[2]);\n      }\n    }\n\n    if (arrayOfPipes[0].positionx <= -100){\n      arrayOfPipes.shift()\n      arrayOfPipes.push(newPipe)\n    }\n  }\n\n  moveOnePipe(pipe){\n    pipe.positionx -= 1;\n  }\n}\n\nclass Pipe {\n  constructor(dimensions){\n    this.dimensions = dimensions;\n    this.gap = LCONSTANTS.VERT_GAP\n    this.gap_height = this.getRandomGapHeight(50, this.dimensions.height - this.gap - 50)\n    this.positionx = this.dimensions.width;\n  }\n\n  animate(ctx){\n    this.drawPipe(ctx);\n    this.drawGap(ctx);\n  }\n\n  drawPipe(ctx){\n    ctx.fillStyle = 'green'\n    ctx.fillRect(this.positionx, 0, 100, this.dimensions.height)\n  }\n\n  drawGap(ctx){\n    ctx.fillStyle = 'skyblue'\n    ctx.fillRect(this.positionx, this.gap_height, 100, this.gap)\n  }\n  getRandomGapHeight(min, max){\n    return Math.random() * (max - min) + min;\n  }\n}\n\nconst LCONSTANTS = {\n  HORIZ_SPACING: 240,\n  VERT_GAP: 150,\n}\n\n\n//# sourceURL=webpack://flappy-bird-long-practice/./src/level.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;