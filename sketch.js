var bg;
function preload(){
backgroundImage = loadImage("bg.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bg = createSprite(width/2,0,width-100,height-200);
 bg.addImage(backgroundImage);
 bg.scale = 1;
 bg.velocityY = -10;
 
}

function draw() 
{
  background(30);
  if (bg.y < 0){
    bg.y = bg.height/2;
  }
  drawSprites()
}
