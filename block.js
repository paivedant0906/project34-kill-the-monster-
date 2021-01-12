class Block {
    constructor(x,y,width,height) {
      var options = {
         
          restitution: 0.6,
          friction:0.2,
          density:10
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("black")
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
