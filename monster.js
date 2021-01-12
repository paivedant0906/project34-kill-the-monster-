class Monster {
    constructor(x,y,r) {
      var options = {
        isStatic:false,
        restitution:0.2,
         frictionAir:0,
          density:0.2,
         
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("Monster-01.png");
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      World.add(world, this.body);
    }
    display(){
     
     
     
      
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y, this.r, this.r);
      
    }
  };
