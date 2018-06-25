Function.prototype.inherits = function(parent) {
  // function Surrogate() {}
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject (size) {
  this.size = size;
}

function Ship (size, color) {
  MovingObject.call(this, size);
  this.color = color;
}
Ship.inherits(MovingObject);

function Asteroid (material) {
  this.material = material;
}
Asteroid.inherits(MovingObject);

Ship.prototype.speed = function() {
  console.log('Im going fast');
};

Asteroid.prototype.rotation = function() {
  console.log('Im rotating');
};

const m = new MovingObject(5);
const s = new Ship(20, 'orange');
const a = new Asteroid('gold');


