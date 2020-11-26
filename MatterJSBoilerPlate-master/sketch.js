
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1, ground1, stone1;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1 = new Tree(650,600);
	ground1 = new Ground(400,700);
	stone1 = new Stone(200,560);

	mango1 = new Mangoes(600,450);
	mango2 = new Mangoes(610,400);
	mango3 = new Mangoes(700,410);
	mango4 = new Mangoes(630,400);
	mango5 = new Mangoes(710,450);
	mango6 = new Mangoes(750,430);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree1.display();
  ground1.display();
  stone1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  drawSprites();
 
}



