const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ground_options;
var ball , ball_options;

function setup() {
  var canvas= createCanvas(400,400);
  engine = Engine.create(); //creates Physics Engine
  world = engine.world;

  ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,380,50,50,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution:0.5
  }
  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);


  
}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}