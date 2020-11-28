//delcaring the sprites
var bow , arrow ,  background1 , blueballoon , greenballoon , pinkballoon , redballoon ;

var bowImage , arrowImage  , green_balloonImage,red_balloonImage , pink_balloonImage , blue_balloonImage , backgroundImage;

var score = 0; 

var redB , greenB , blueB , pinkB , arrowGroup;

//to load the pictures 
function preload()
{
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  //to create the canvas 
  createCanvas(600, 600);
  
  //to create the background 
  background1 = createSprite(0,0,600,600);
  background1.addImage(backgroundImage);
  background1.scale = 3;
  
  // to make the bow to shoot the arrow 
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
    
}
function draw() {

  // to make the ground move 
    background1.velocityX = -3

    if (background1.x < 0){
      background1.x = background1.width/2;
    }
  
  //to make the bow move with the mouse 
  bow.y = World.mouseY
  
   // to release the arrow when the space key is pressed
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  //to create the continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
    
    redB.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;
  }
 
  if (arrowGroup.isTouching(greenB)) {
    
    greenB.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;
  }
  
  if (arrowGroup.isTouching(blueB)) {
    
    blueB.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;
  }
  
  if (arrowGroup.isTouching(pinkB)) {
    
    pinkB.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;
  }
  
  
  
  drawSprites();
   //to calculate the score 
    text("Score: "+ score, 500,50);
}

// to create the red balloons
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  return red
  
}

// to create the blue balloons
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blueB.add(blue);
  blue.scale = 0.1;
  
  return blue;
}

// to create the green balloons
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  return green;   
}

// to create the pink balloons 
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
  return pink;
}


// to create the arrows for the bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 80;
  arrow.scale =0.3;
  arrowGroup.add(arrow);
  return arrow;
   
}
