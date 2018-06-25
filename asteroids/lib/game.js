const Asteroid = require("./asteroid.js");

function Game(DIM_X, DIM_Y, NUM_ASTEROIDS) {
  this.DIM_X = DIM_X;
  this.DIM_Y = DIM_Y;
  this.NUM_ASTEROIDS = NUM_ASTEROIDS;
  this.asteroids = [];

  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++){
    const aster = new Asteroid(this.randomPosition(), i);
    this.asteroids.push(aster);
  }
};

Game.prototype.randomPosition = function() {
  return { pos: [Math.random() * this.DIM_X, Math.random() * this.DIM_Y] };
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 1000, 1000);
  for(let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move(ctx);
  }
};

module.exports = Game;
