var player, playerI;
var obstacles,obstaclesI,obstaclesII,obstaclesIII,obstaclesIV;


function preload() {
  playerI=loadImage();
   obstaclesI=loadImage();
   obstaclesII=loadImage();
  obstaclesIII=loadImage();
  obstaclesIV=loadImage();
  }
function setup() {
 player=createSprite();
 player.addImage();
 //controls
if(keyDown(UP_ARROW)){
player.velocityY=-3;
}  
if(keyDown(LEFT_ARROW)){
player.velocityX=-3;
}  
  if(keyDown(UP_ARROW)){
player.velocityY=10;
}  
  if(keyDown(UP_ARROW)){
player.velocityY=-10;
}  
  
}
