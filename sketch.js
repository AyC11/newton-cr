const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint= Matter.MouseConstraint
var mConstraint;
var bob1,bob2,bob3, bob4, roof
var launcher1,launcher2,launcher3,launcher4;
var world;
var canvas

function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;
	let canvasmouse=Mouse.create(canvas.elt);
	canvasmouse.pixelRatio= pixelDensity();
	let options ={
	mouse:canvasmouse
	};
	mConstraint= MouseConstraint.create(engine,options)
	World.add(world, mConstraint)
	bob1=new Bob(200,460,"black");
	bob2=new Bob(250,460,"black")
	bob3=new Bob(300,460,"black")
	bob4=new Bob(350,460,"black")
	launcher1 = new Launcher(bob1.body,{x:200, y:230});
	launcher2 = new Launcher(bob2.body,{x:250, y:230});
	launcher3 = new Launcher(bob3.body,{x:300, y:230});
	launcher4 = new Launcher(bob4.body,{x:350 ,y:230});
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 launcher1.display();
 launcher2.display();
 launcher3.display();
 launcher4.display();
}

function mouseDragged(){
	//Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:mouseX,y:mouseY});
}


/*function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

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
}*/
