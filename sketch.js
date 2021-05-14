const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup() {
 var canvas= createCanvas(400,400);
 
 engine = Engine.create();
 world= engine.world;

 var object_options ={
   isStatic: true
 }
 object= Bodies.rectangle(200,380,400,20, object_options);
 World.add(world,object);
 console.log(object.position.x)
 console.log(object.position.y)

 var ball_options ={
   restitution: 0.5
 }
 
 ball= Bodies.circle(200,100,15,ball_options);
 World.add(world,ball)


}

function draw() {
  background(0,0,0);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);

}