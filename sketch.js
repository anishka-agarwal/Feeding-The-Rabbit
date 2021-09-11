var garden,rabbit,apple,leave,select_sprites
var gardenImg,rabbitImg,appleImg,leaveImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leaveImg = loadImage("leaf.png")
  }
  function createApples(){
    apple = createSprite(random(50, 350), 40, 10, 10)
    apple.addImage(appleImg)
    apple.scale = 0.07
    apple.velocityY = 2
    apple.lifetime = 120
  }
  function createLeaves(){
    leave = createSprite(random(50, 350), 40, 10, 10)
    leave.addImage(leaveImg)
    leave.scale = 0.07
    leave.velocityY = 2
    leave.lifetime = 120
  }




function setup(){
  
  createCanvas(400,400);
  
// Moving background  
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);


 
 
  rabbit.x = mouseX
  drawSprites()
  select_sprites = Math.round(random(1,2))
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples()
    } else {
      createLeaves()
    }

  }

}
