var climberImg;
var doorImg;
var ghostjumpImg;
var ghoststandImg;
var towerImg;
var spooky;

var climber;
var door;
var ghost;
var tower;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

//to pre load images and sound
function preload(){
  climberImg = loadImage("climber.png");
  doorImg = loadImage("door.png");
  ghostjumpImg = loadImage("ghost-jumping.png");
  ghoststandImg = loadImage("ghost-standing.png");
  towerImg = loadImage("tower.png");
  
  spooky = loadSound("spooky.wav");
}

function setup(){
  
  tower = createSprite(300,300,20,20);
  tower.addImage(towerImg);
  
  door = createSprite(100,100,10,10);
  door.addImage(doorImg);
  
  climber = createSprite(200,200,10,10);
  climber.addImage(climberImg);
  
  ghost = createSprite(50,50,10,10);
  ghost.addImage(ghostjumpImg);
  ghost.scale = 0.5;
  
}

function draw(){
  
  createCanvas(windowWidth, windowHeight);
  
  background("lightblue");
  
  //spooky.loop();
  
  if(gameState === PLAY){
    
    ghost.x = windowWidth/2;
    ghost.y = windowHeight/2;
    
    climber.x = door.x;
    climber.y = door.y;
    
    if(keyDown("space")){
      
      ghost.velocityY = -3;
       }
    ghost.velocityY = ghost.velocityY +3;
           }
    if(door.istouching){
       
  }
  
  drawSprites();
  
}

