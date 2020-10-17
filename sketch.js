var fixedRect, movingRectg1,g2,g3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  g1 = createSprite(200,300,50,50);
  g1.shapeColor = "green";

  g2 = createSprite(400,300,50,50);
  g2.shapeColor = "green";

  g3 = createSprite(600,300,50,50);
  g3.shapeColor = "green";

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  

  
  drawSprites();
}

function isTouching()
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
  {
    return true;
  }
  else 
  {
    return false;
  }


}