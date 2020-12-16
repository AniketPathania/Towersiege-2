const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
  img=loadImage("polygon.png");
  bg = loadImage("building.jpg")
}
function setup() {
  createCanvas(1600,800);

  engine = Engine.create();

  world = engine.world;
  ground1=new Ground(600,585,300,10);
  ground2=new Ground(930,415,200,10);
  //smaller ground
  b1=new Bluebox(600,560);
  b2=new Bluebox(570,560);
  b3=new Bluebox(540,560);
  b4=new Bluebox(630,560);
  b5=new Bluebox(660,560);
  b27=new Bluebox(690,560);
  b28=new Bluebox(510,560);

  b6=new Greenbox(540,520);
  b26=new Greenbox(660,520);
  b7=new Greenbox(570,520,);
  b8=new Greenbox(600,520);
  b9=new Greenbox(630,520);
  //bigger ground
  b10=new Redbox(600,480);
  b11=new Redbox(570,480);
  b12=new Redbox(630,480);

  b13=new Bluebox(600,440);

  //b15=new Redbox(900,195);
 // b16=new Redbox(750,600);
  b17=new Redbox(930,370);
  b18=new Redbox(960,370);
  b19=new Redbox(900,370);
  b20=new Redbox(870,370);
  b21=new Redbox(990,370);

  b22=new Bluebox(930,340);
  b23=new Bluebox(960,340);
  b24=new Bluebox(900,340);

  b25=new Greenbox(930,310);
  //polygon body
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
sling = new Slingshot(this.polygon,{x:200,y:400});
}

function draw() {
  background(bg);  
  Engine.update(engine);
  textSize(20);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,130);
  text("Press space to get another chance ",100,150);
ground1.display();
ground2.display();
//smaller ground
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
//bigger ground
b10.display();
b11.display();
b12.display();
b13.display();

//b15.display();
//b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();
b27.display();
b28.display();
b21.display();
imageMode(CENTER);
image(img,polygon.position.x,polygon.position.y,40,40);
sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon, {x:200, y:400}) 
	  sling.attach(this.polygon);
	}
  }