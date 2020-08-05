const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,ground2,ground3,ground4;
var dividers = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

function setup(){
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
  for (var k = 80;k<460;k=k+79){
    dividers.push(new Divider(k,height-divisionHeight/2,10,divisionHeight));
  }
  ground = new Ground(width/2,height-5,width,10);
  ground2 = new Ground(4,400,10,800);
  ground3 = new Ground(476,400,10,800);
  ground4 = new Ground(240,4,490,10);
 
 
 
  for (var a = 20;a<470;a=a+40){
    plinkos.push(new Plinko(a,50,10))
  }
  for (var a = 30;a<450;a=a+40){
    plinkos.push(new Plinko(a,100,10))
  }
  for (var a = 10;a<470;a=a+40){
    plinkos.push(new Plinko(a,150,10))
  }
  for (var a = 30;a<450;a=a+40){
    plinkos.push(new Plinko(a,200,10))
  }
  for (var a = 10;a<470;a=a+40){
    plinkos.push(new Plinko(a,250,10))
  }
  for (var a = 30;a<450;a=a+40){
    plinkos.push(new Plinko(a,300,10))
  }
  for (var a = 10;a<470;a=a+40){
    plinkos.push(new Plinko(a,350,10))
  }
}
   



function draw() {
  background(0);  
  Engine.update(engine);0
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  for (var k = 0;k<dividers.length;k=k+1){
    dividers[k].display()
  }
  for (var i = 0;i<particles.length;i=i+1){
    particles[i].display();
  }
  for (var a = 0;a<plinkos.length;a=a+1){
    plinkos[a].display();
  }
}
