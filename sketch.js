var box
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,30,30)



}








function draw() 
{
  background(30);
if (keyDown("a"))
{
box.position.x=box.position.x-2
}
if (keyDown("d"))
{
box.position.x=box.position.x+2
}


drawSprites()


}




