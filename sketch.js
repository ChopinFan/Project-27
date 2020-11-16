
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var theRoof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;

var bobDiameter = 40;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	theRoof = new Roof(800,175,228.571429,20);

	startBobPositionX = 800;
	startBobPositionY = 675;
	
	bob1 = new Bob(720,675,40);
	bob2 = new Bob(760,675,40);
	bob3 = new Bob(800,675,40);
	bob4 = new Bob(840,675,40);
	bob5 = new Bob(880,675,40);

	rope1 = new Rope(bob1.body,theRoof.body,bobDiameter);
	rope2 = new Rope(bob2.body,theRoof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,theRoof.body,0,0);
	rope4 = new Rope(bob4.body,theRoof.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,theRoof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();

  theRoof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
