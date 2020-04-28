// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground;
var head, shooter, cannonBall, cannonBallImage, tanker;
var bouncyBall1, bouncyBall2;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    tanker = new Tanker(100,360,100,40);
    head = new Ball(100,336,85);
    shooter = new ShootBall(150,312,125,25);

    cannonBall = new CanonBall(192, 312, 20);

    bouncyBall1 = new BouncyBall(600, 200, 25);
    bouncyBall2 = new BouncyBall(1100, 200, 25);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("turquoise");
    Engine.update(engine);
    
    ground.display();
    tanker.display();
    head.display();
    shooter.display();
    cannonBall.display();
    bouncyBall1.display();
    bouncyBall2.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}