var player;
var opp1,opp2;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	//Create the Bodies Here.

player = new Pcclass(600,350);

opp1 = new Npcclass();
opp2 = new Npcclass();

ball = createSprite(player.pc.x,player.pc.y-20,20,20);
ball.shapeColor = "yellow";
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.x = player.pc.x ;
  ball.y = player.pc.y - 20;

  if(keyIsDown(UP_ARROW)&&player.pc.y>10){
	  player.pc.y = player.pc.y-10;
  }

  if(keyIsDown(DOWN_ARROW)&&player.pc.y<700){
	player.pc.y = player.pc.y+10;
}

if(keyIsDown(RIGHT_ARROW)&&player.pc.x<1200){
	player.pc.x = player.pc.x+10;
}

if(keyIsDown(LEFT_ARROW)&&player.pc.x>10){
	player.pc.x = player.pc.x-10;
}

//if(keyIsDown)

  drawSprites();

}


