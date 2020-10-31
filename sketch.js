var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redbox1,redbox2,redbox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var o_options ={
		isStatic : true
	  }
 
	engine = Engine.create();
	world= engine.world;
	
	redbox1=createSprite(400, 650, 100, 20, o_options);
	redbox2=createSprite(350, 630, 20, 80, o_options);
	redbox3=createSprite(450, 630, 20, 80, o_options);

	redbox1.shapeColor = ("red");  
	redbox2.shapeColor = ("red");  
	redbox3.shapeColor = ("red");  

	packageSprite=createSprite(width/2, 80, 10,10,o_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)  
  }
}

