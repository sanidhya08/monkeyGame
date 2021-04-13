
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var SurvivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("white");
  SurvivalTime=Math.round(frameCount/40);
  text("SurvivalTime : "+ SurvivalTime, 150,50);
  
if(ground.x<0){
  ground.x = ground.width/2;
}
  
  

  if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  spawnObstacles();
  spawnBanana();
  
  drawSprites();
}

function spawnObstacles(){
  
  if (frameCount % 150 === 0){
   var obstacle = createSprite(400,320,10,40);
    obstacle.velocityX=-3
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.15; 
    obstacle.lifetime = 140
          
  }
  
  
}

function spawnBanana(){
  
  if (frameCount % 100 === 0){
    
    var banana = createSprite(400,150,10,20);
    banana.velocityX = -5
    banana.addImage("fruit",bananaImage);
    banana.scale=0.06
    banana.lifetime = 85;
  }
  
}
