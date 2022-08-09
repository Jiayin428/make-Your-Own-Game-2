
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, bgImg

var monster_1Group
var monster_1, monster_1Img
var monster_2Group
var monster_2, monster_2Img

function preload(){
	bgImg = loadImage("/assets/forest.png");
	monster_1Img = loadImage("/assets/monster_1.png");
	monster_2Img = loadImage("/assets/monster_2.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg = createSprite(displayWidth/2,displayHeight/2-40,20,2)
	bg.scale = 2.1;
	bg.addImage(bgImg);

	monster_1Group = new Group();
	monster_2Group = new Group();


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	monsters();

  drawSprites();
}

function monsters(){
	if(frameCount%70 == 0){
        monster_1 = createSprite(random(900,1500),random(300,700),40,40);
        monster_1.addImage(monster_1Img);
        monster_1.scale = 0.40;
        monster_1.velocityX = -3;
        monster_1Group.add(monster_1);
        monster_1.lifetime = 400;

        monster_1.debug = true;
        monster_1.setCollider("rectangle",0,0,350,400);
    }
}