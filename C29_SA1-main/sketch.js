const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var rope;
var fruit; 
var fruit_con
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,600,600,20);
  rope = new Rope(7,{x:250, y:50})
  var fruit_options={
    density:0.001
  }
  fruit=Bodies.circle(250,200,20,fruit_options)
  Matter.Composite.add(rope.body,fruit)
  fruit_con=new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
  ellipse(fruit.position.x,fruit.position.y,20)

 
   
}
