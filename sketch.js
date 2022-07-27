const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground;
var left;
var right;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(500, 700, windowWidth, 3000);
  left = new Ground(1100, 600, 10, 100);
  right = new Ground(1120, 600, 10, 100);

  var ball_options = {
	isStatic:false,
    restitution: 0.3,
 	friction: 0,
	density:1.2
  };
  
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);
}


function draw() 
{
  background(51);

  ellipse(ball.position.x, ball.position.y, 20);

  Engine.update(engine);
  ground.show();
  left.show();
  right.show();
}

function keyPressed() {

	if (keyCode === UP_ARROW){
		
	}

}