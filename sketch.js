const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld, myEngine;

function preload(){
  backgroundImage=loadImage('sprites/day.jpg');
  craneImage=loadImage('sprites/crane.png');
}

function setup() {
  createCanvas(1200,610);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground=new Ground(600,590,1200,40);

  box1=new Box(900,100,70,70);
  box2=new Box(900,100,70,70);
  box3=new Box(900,100,70,70);
  box4=new Box(900,100,70,70);
  box5=new Box(900,100,70,70);
  box6=new Box(900,100,70,70);
  box7=new Box(900,100,70,70);
  box8=new Box(900,100,70,70);
  box9=new Box(900,100,70,70);

  box10=new Box(800,100,70,70);
  box11=new Box(800,100,70,70);
  box12=new Box(800,100,70,70);
  box12a=new Box(800,100,70,70);
  box12b=new Box(800,100,70,70);
  box12c=new Box(800,100,70,70);

  box13=new Box(700,100,70,70);
  box14=new Box(700,100,70,70);
  box15=new Box(700,100,70,70);
  box16=new Box(700,100,70,70);
  box17=new Box(700,100,70,70);
  box18=new Box(700,100,70,70);
  box19=new Box(700,100,70,70);
  box20=new Box(700,100,70,70);

  ball =new Ball(200,200,70,70);

  rope=new Rope(ball.body,{x:500,y:50});
  ballplatform=new Ground(500,30,300,60);
  //tint('grey');

}

function draw() {
  background('skyblue');
  //image(backgroundImage,0,0,1200,800);
  image(craneImage,120,40);  
  Engine.update(myEngine);  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box12a.display();
  box12b.display();
  box12c.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  rope.display();
  ball.display();
  
  ballplatform.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}