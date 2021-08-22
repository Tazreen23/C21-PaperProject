var ball;
let leftSide;
let rightSide;
var groundObj;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1000, 900);
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);
	
	groundObj = new ground(width / 2, 670, width, 20);
	leftSide = new ground(1100, 600, 20, 120);
	rightSide = new ground(2200, 800, 20, 120);
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(body, position, force);
	}

}


function draw() {
	rectMode(CENTER);
	background(0);
	groundObj.display();
	leftSide.display();
	rightSide.display();
	drawSprites();

}



