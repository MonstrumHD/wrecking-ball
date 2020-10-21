const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Bodies
const Constraint = Matter.Constraint

var Wreckingball,Building1,Building2,Building3,theRope;

var myEngine,myWorld

function setup() {
  createCanvas(800,800);

  myEngine = Engine.create()
  myWorld = myEngine.myWorld

  Wreckingball = new Ball(80,450,15,15)
  Building1 = new Box(300,600,50,50)
  Building2 = new Box(300,500,50,50)
  Building3 = new Box(300,700,50,50)
  theRope = new Line(WreckingBall,{x:270,y:300})
}

function draw() {
  background(255,255,255);

  Engine.update(myEngine);

  Wreckingball.display()
  Building1.display()
  Building2.display()
  Building3.display()
}