
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var paper;
var ground;
var dustbin;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,100,25,25);
	ground = new Ground(600,height,1200,20);
	dustbin1 = new Log(810,260,300,PI/2);
	dustbin2 = new Log(760,120,150,PI/0);
    dustbin3 = new Log(870,120,150,PI/0);
  
}


function draw() {
	background(0);
    Engine.update(engine);
    paper1.display();
    ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}

