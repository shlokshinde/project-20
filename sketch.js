var car,wall;
var speed, weight,deform;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
 
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(750,200,50,200);
}

function draw() {
  background("black");
  car.velocityX = speed; 
  if(wall.x-car.x < (car.width+wall.width)/2) {
   car.x=700;
   car.y=wall.y;
   var deform = (0.5*speed*speed*weight)/2500;
   if (deform < 100) {
    car.shapeColor=color(0, 255, 0);
   } 
   if (deform < 180 && deform > 100) {
    car.shapeColor=color(230, 230, 0); 
   }
   if (deform > 180) {
    car.shapeColor=color(255, 0, 0);
   }
   car.velocityX = 0;
  }
  
  drawSprites();
}