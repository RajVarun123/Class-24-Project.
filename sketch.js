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

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    tanker = new Tanker(100,360,100,40);
    head = new Ball(100,340,85);
    shooter = new ShootBall(150,312,125,25);

    cannonBall = new CanonBall(250, 312, 20);
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
}


function keyReleased() {
    // Call the shoot method for the cannon.

    if(keyDown("space")) {
        cannonBall.velocityX = 2;

        cannonBall_options = {
            "density" :   1.5,
            "friction" : 1.0,
            "restitution" : 0.8,
            "frictionAir": 0.06
        }
    } else {
        cannonBall.velocityX = 0;

        cannonBall_options = {
            "isStatic": true
        }
    }
}