class Red_Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }