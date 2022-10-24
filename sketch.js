var mar, marImage;
var barco, barco_navegando;


function preload(){
  barco_navegando=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  marImage=loadImage("sea.png");

}

function setup(){
  createCanvas(600,400);
  barco=createSprite(200,170,10,20);
  barco.addAnimation ("navegando", barco_navegando);
  barco.scale=0.4;

 mar=createSprite(200,200);
mar.addImage(marImage);
mar.velocityX=-2.5;
mar.scale=0.25;

}

function draw() {
  mar.depth = barco.depth; 
  barco.depth = barco.depth + 6;

  if(mar.x<0){
    mar.x=mar.width/8.5;
  }
drawSprites();
}