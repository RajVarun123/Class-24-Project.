class CanonBall {
  constructor(x,y,radius) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir": 0.06
    }

    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    World.add(world, this.body);
  }

  display() {
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke();
    fill(0);
    ellipse(0, 0, this.radius);
    pop();
  }
};