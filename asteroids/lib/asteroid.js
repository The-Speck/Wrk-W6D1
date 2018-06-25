const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(options, id) {
  MovingObject.call(this, { pos: options.pos });
  this.id = id;
  this.vel = Util.randomVec(20);
  this.color = "#8b8e93";
  this.radius = Math.random() * 20 + 20;
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
