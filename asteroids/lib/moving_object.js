function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
  
  setInterval(() => {    
    ctx.clearRect(0, 0, 1000, 1000);
    this.pos[0] += this.vel[0]/10;
    this.pos[1] += this.vel[1]/10;
    
    if (this.pos[0] > 1000) {
      this.pos[0] = 0;
    }
    if (this.pos[1] > 1000) {
      this.pos[1] = 0;
    }
    if (this.pos[0] < 0) {
      this.pos[0] = 1000;
    }
    if (this.pos[1] < 0) {
      this.pos[0] = 1000;
    }
    
    this.draw(ctx);
  }, 10);
  
};

module.exports = MovingObject;
