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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = __webpack_require__(1);
var Player_1 = __webpack_require__(2);
var Game = (function () {
    function Game() {
        this.foods = this.createFood(Game.startingFoodCount);
        this.player = new Player_1.Player(this.checkCollision.bind(this));
        this.gameboard = document.getElementById('gameboard');
        this.render();
    }
    Game.prototype.createFood = function (count) {
        var foods = [];
        for (var i = 0; i < count; i++) {
            foods.push(new Food_1.Food("food_" + i));
        }
        return foods;
    };
    Game.prototype.checkCollision = function () {
        for (var i = 0; i < this.foods.length; i++) {
            var food = this.foods[i];
            if (this.player.x <= food.x &&
                this.player.x + this.player.size >= food.x + food.size &&
                this.player.y <= food.y &&
                this.player.y + this.player.size >= food.y + food.size) {
                this.tryEat(i);
                return;
            }
        }
    };
    Game.prototype.tryEat = function (foodIndex) {
        var canEat = this.player.eat(this.foods[foodIndex].size);
        if (canEat) {
            this.gameboard.removeChild(this.foods[foodIndex].element);
            this.foods.splice(foodIndex, 1);
        }
    };
    Game.prototype.render = function () {
        var _this = this;
        this.foods.forEach(function (food) { return _this.gameboard.appendChild(food.element); });
        this.gameboard.appendChild(this.player.element);
    };
    return Game;
}());
Game.startingFoodCount = 50;
Game.gameboardSize = 500;
exports.Game = Game;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Food = (function () {
    function Food(id) {
        this.x = this.generateRandom(Food.coordRange - Food.sizeRange);
        this.y = this.generateRandom(Food.coordRange - Food.sizeRange);
        this.size = this.generateRandom(Food.sizeRange);
        this.id = id;
        this.element = this.createElement(this.id);
    }
    Food.prototype.generateRandom = function (range) {
        return Math.round(Math.random() * range);
    };
    Food.prototype.createElement = function (id) {
        var element = document.createElement('div');
        element.id = id;
        element.className = 'food';
        element.style.left = this.x + "px";
        element.style.top = this.y + "px";
        element.style.width = this.size + "px";
        element.style.height = this.size + "px";
        return element;
    };
    return Food;
}());
Food.coordRange = 500;
Food.sizeRange = 30;
exports.Food = Food;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(0);
var Player = (function () {
    function Player(collisionCallback) {
        this.x = this.y = Player.startingCoord;
        this.size = Player.startingSize;
        this.speed = Player.startingSpeed;
        this.element = this.createElement('player_1');
        this.collisionCheck = collisionCallback;
        this.createMovementListeners();
    }
    Player.prototype.createMovementListeners = function () {
        document.addEventListener('keydown', this.handleMovement.bind(this));
    };
    Player.prototype.createElement = function (id) {
        var element = document.createElement('div');
        element.id = id;
        element.className = 'player';
        element.style.left = this.x + "px";
        element.style.top = this.y + "px";
        element.style.width = this.size + "px";
        element.style.height = this.size + "px";
        return element;
    };
    Player.prototype.handleMovement = function (event) {
        switch (event.keyCode) {
            case 87:
                this.move(0, -this.speed);
                break;
            case 83:
                this.move(0, this.speed);
                break;
            case 68:
                this.move(this.speed, 0);
                break;
            case 65:
                this.move(-this.speed, 0);
                break;
        }
    };
    Player.prototype.move = function (dx, dy) {
        if (this.x + this.size + dx <= Game_1.Game.gameboardSize &&
            this.x + dx >= 0) {
            this.x += dx;
        }
        if (this.y + this.size + dy <= Game_1.Game.gameboardSize &&
            this.y + dy >= 0) {
            this.y += dy;
        }
        this.repositionElement();
        this.collisionCheck();
    };
    Player.prototype.repositionElement = function () {
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    };
    Player.prototype.resizeElement = function () {
        this.element.style.width = this.size + "px";
        this.element.style.height = this.size + "px";
    };
    // There is a known bug with this logic. If on the rightmost of bottommost side
    // and you eat something and grow past the bounds of the gameboard, you won't
    // be able to move in the opposite direction.
    Player.prototype.eat = function (size) {
        if (size <= this.size) {
            this.size += size * 0.3;
            this.speed -= this.speed * 0.05;
            this.resizeElement();
            return true;
        }
        return false;
    };
    return Player;
}());
Player.startingSpeed = 3;
Player.startingSize = 10;
Player.startingCoord = (500 / 2) - Player.startingSize;
exports.Player = Player;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(0);
// This is where we create the game.
// This file is linked in index.html.
var game = new Game_1.Game();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map