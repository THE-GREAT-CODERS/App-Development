
var BballonI,GballonI,RballonI;
var bg,bgI;
var bow,bowI;
var arrow,arrowI;
var score; 
function preload(){
 //load your images here 
 BballonI = loadImage("blue_balloon0.png");
 GballonI = loadImage("green_balloon0.png");
 RballonI = loadImage("red_balloon0.png"); 
 bgI = loadImage("background0.png");
 bowI = loadImage("bow0.png");
 arrowI = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
 bg = createSprite(200,200,10,10);
bg.addImage(bgI); 
bg.scale=3;  
 
  
bow = createSprite(500,250,10,10);
bow.addImage(bowI);

}

function draw() {
bow.y=World.mouseY;
  bg.velocityX=-1;  
if(bg.x<0){
  bg.x = 200;
}

arrow();  
drawSprites(); 
var score = frameCount/100;
textSize(20);  
text("SCORE:"+score,270,30);  
}
function arrow(){
if(keyDown("space")){  
var arrow = createSprite(bow.x,bow.y,10,10);
 arrow.addImage(arrowI);
 arrow.scale=0.5;
 arrow.velocityX=-3;
 arrow.lifetime=200; 
  
}
var i = Math.round(random(50,400));
var w = Math.round(random(100,350));
var v=  Math.round(random(1,4)); 
if(frameCount%80===0){
  var balloon = createSprite(i,w,20,20);
  if(v===1){
  balloon.addImage(RballonI);  
  }
  
  if(v===2){
  balloon.addImage(RballonI);  
  }
  
  if(v===3){
  balloon.addImage(BballonI);  
  }
  
  if(v===4){
  balloon.addImage(GballonI);  
  }
balloon.scale=0.125; 
balloon.lifetime=200;

  
}  
}
