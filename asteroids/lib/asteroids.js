const MovingObject = require("./moving_object.js");

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


window.MovingObject = MovingObject;

const a = new MovingObject( { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});
a.draw(ctx);
a.move(ctx);
