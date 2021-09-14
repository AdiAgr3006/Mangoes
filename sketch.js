
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var tree, ground, stone, boyImg, boy;
var m1, m2, m3, m4, m5;

function preload() {
	boyImg = loadImage("boy.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,300);
	ground = new Ground(400, 600, 800, 10);
	stone = new Stone(100, 300);

	string1 = new String({x: 105, y:250},stone.body);
	m1 = new Mangoes(500,200);
	m2 = new Mangoes(550,150);
	m3 = new Mangoes(600,225);
	m4 = new Mangoes(650,250);
	m5 = new Mangoes(700,175);

	Engine.run(engine);

	boy = createSprite(200, 500);
	boy.addImage(boyImg);
	boy.scale = 1/6;
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  ground.display();
  stone.display();
  string1.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  drawSprites();

 
}



