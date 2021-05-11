var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snowflakes = [];

var boyWalking1, boyWalking2, boy

function preload(){
  backgroundImg = loadImage("Snow.jpeg");
  boyWalking1 =loadAnimation ("boy1.png","boy2.png")
  boyWalking2 =loadAnimation ("boy3.png","boy4.png")
}
function setup() {
  createCanvas(700,400);

  boy=createSprite(0,300,60,40)
  boy.addAnimation("boyWalking1",boyWalking1)
  boy.addAnimation("boyWalking2",boyWalking2)
  boy.scale= 0.6
  boy.velocityX=1

  if(frameCount%60===0){
    snowflakes.push(new Snowflake(random(width/2-10, width/2+10), 10, 10))
  }

}
function draw() {
  background(backgroundImg);  

  for( var j = 0; j< snowflakes.length; j++){
    snowflakes[j].display();
  }

  turn();
  drawSprites();

}

async function turn(){
  if (boy.x>700) {
    boy.changeAnimation("boyWalking2", boyWalking2)
    boy.velocityX=-1
} else if (boy.x<0){
    boy.changeAnimation("boyWalking1")
    boy.velocityX=1
}
}

