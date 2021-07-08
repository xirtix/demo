var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background("red");
drawSprites()
if(keyDown("d")){
  box.position.y=box.position.y+2
}
if(keyDown("a")){
  box.position.y=box.position.y-2
}
if(keyDown("w")){
  box.position.x=box.position.x+2
}
if(keyDown("s")){
  box.position.y=box.position.y-2
}
}





