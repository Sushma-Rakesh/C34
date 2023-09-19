const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
var score = 0;
function preload(){
  backgroundImg = loadImage("background.png");
 fruit=loadImage("melon.png");
 g=loadImage("basket.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Challenge13
  ball = Bodies.circle(width-1000,height-300,40);
  World.add(world,ball);
  //challenge 2
  slingShot = new Slingshot(this.ball,{x:width-1000,y:100});

}
function draw() {
  background(backgroundImg); 

  textSize(20)
  fill("black")
  text("Score : "+score,width-700,height-550)

  Engine.update(engine);
  
  ground.display();
  g.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,100,100);
  image(g,width-650,height-130)

  slingShot.display();


    var collision = Matter.SAT.collides(fruit,g)
    if(collision.collided){
      score=score+50

    }


}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}
