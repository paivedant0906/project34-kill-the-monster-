const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Bodies=Matter.Bodies;


var engine,world;
var bi,si,mi;
function preload() {
//preload the images here
bi=loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create()
  world=engine.world;
  // create sprites here
h=new Hero(280,300,200)
g=new Ground(200,500,1200,20)
f=new Fly(h.body,{x:290,y:50})
m=new Monster(750,400,200)

b1=new Block(500,480,40,40)
b2=new Block(500,450,40,40)
b3=new Block(500,420,40,40)
b4=new Block(500,390,40,40)
b5=new Block(500,360,40,40)
b6=new Block(500,330,40,40)
b7=new Block(500,300,40,40)
b8=new Block(500,270,40,40)

b9=new Block(560,420,40,40)
b10=new Block(560,390,40,40)
b11=new Block(560,360,40,40)
b12=new Block(560,330,40,40)
b13=new Block(560,300,40,40)
b14=new Block(560,270,40,40)

b15=new Block(620,480,40,40)
b16=new Block(620,450,40,40)
b17=new Block(620,420,40,40)
b18=new Block(620,390,40,40)
b19=new Block(620,360,40,40)
b20=new Block(620,330,40,40)
b21=new Block(620,300,40,40)
b22=new Block(620,270,40,40)
}

function draw() {
  background(255);
  image(bi,1500,400,3000,800);
  Engine.update(engine)
h.display();
g.display();
f.display();
m.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
console.log(m.y)
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
}


function mouseDragged(){
 
  Matter.Body.setPosition(h.body, {x: mouseX , y: mouseY});

}

