const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.height = 1000;
canvas.width = 1000;


// window.MovingObject = MovingObject;


const g = new Game(canvas.width, canvas.height, 8);
const gv = new GameView(g, ctx);
gv.start();
