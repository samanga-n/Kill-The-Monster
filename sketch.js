const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png")

}

function setup() {
 
  createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  myBase= new Base(460,500,500,10);
  myHero = new Hero(200,250,200);
  iv_thread = new Thread(myHero.body,{x:50, y:11});

  monster= new Monster(750,340,200);
  
  monsterBase = new iv_Base(750,400,100,5);
  // monsterBase.visible=true;

  Block1a= new Block(395,460,50,50);
  Block1b= new Block(395,410,50,50);
  Block1c= new Block(395,360,50,50);
  Block1d= new Block(395,310,50,50);
  Block1e= new Block(395,260,50,50);
  Block1f= new Block(395,210,50,50);
  Block1g= new Block(395,160,50,50);
  Block1h= new Block(395,110,50,50);

  Block2a= new Block(475,460,50,50);
  Block2b= new Block(475,410,50,50);
  Block2c= new Block(475,360,50,50);
  Block2d= new Block(475,310,50,50);
  Block2e= new Block(475,260,50,50);
  Block2f= new Block(475,210,50,50);
  Block2g= new Block(475,160,50,50);
  Block2h= new Block(475,110,50,50);

  Block3a= new Block(560,460,50,50);
  Block3b= new Block(560,410,50,50);
  Block3c= new Block(560,360,50,50);
  Block3d= new Block(560,310,50,50);
  Block3e= new Block(560,260,50,50);
  Block3f= new Block(560,210,50,50);
	
	// chain1 = new Chain(ball1.body,myRoof.body,-120,0);

}

function draw() {

  background(bg);
  Engine.update(engine);

  myBase.display();
  myHero.display();
  iv_thread.display();
  
  monster.display();
  monsterBase.display();

  Block1a.display();
  Block1b.display();
  Block1c.display();
  Block1d.display();
  Block1e.display();
  Block1f.display();
  Block1g.display();
  Block1h.display();

  Block2a.display();
  Block2b.display();
  Block2c.display();
  Block2d.display();
  Block2e.display();
  Block2f.display();
  Block2g.display();
  Block2h.display();

  Block3a.display();
  Block3b.display();
  Block3c.display();
  Block3d.display();
  Block3e.display();
  Block3f.display();

}
function mouseDragged(){
  Matter.Body.setPosition(myHero.body,{x:mouseX,y:mouseY});
}
