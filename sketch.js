var jaxon,jaxonImg,path,pathImg
function preload(){
  //pre-load images
  jaxonImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
}

function setup(){
//Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;
leftBorder=createSprite(40,200,10,400);
rightBorder=createSprite(370,200,10,400);
leftBorder.visible=false;
rightBorder.visible=false;


  createCanvas(400,400);
  //create sprites here

  jaxon=createSprite(200,350);
  jaxon.addAnimation("Running",jaxonImg);
 jaxon.scale=0.1;


 
}

function draw() {
  background(0);
drawSprites();
jaxon.x=mouseX;
//code to reset the background
if(path.y>300){
  path.y=200;
}
jaxon.collide(leftBorder);
jaxon.collide(rightBorder);
}
