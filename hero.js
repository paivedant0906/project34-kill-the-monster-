class Hero {
    constructor(x,y,r) {
      var options = {
         frictionAir:1,
          density:1,
          isStatic:false,
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("Superhero-01.png");
      this.body = Bodies.circle(x,y,(this.r)/2,options);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.position
         
        
     
     
      
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.r, this.r);
      
    }
  };
