var canvas;
var music;
var block1, block2, block3, block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3"); 
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100, 580, 180, 20);
    block1.shapeColor = "green";

    block2 = createSprite(300, 580, 180, 20);
    block2.shapeColor = "purple";

    block3 = createSprite(500, 580, 180, 20);
    block3.shapeColor = "red";

    block4 = createSprite(700, 580, 180, 20);
    block4.shapeColor = "blue";
    


    //create box sprite and give velocity
    ball = createSprite(400, 300, 20, 20);
    ball.shapeColor = rgb(255, 255, 255);
    ball.velocityX = 5;
    ball.velocityY = 6;

    


}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges = createEdgeSprites();

    ball.bounceOff(edges);

    if (ball.isTouching(block1)) {
        ball.bounceOff(block1);
        ball.shapeColor = "green";
        music.play();
    }

    if (ball.isTouching(block2)) {
        ball.bounceOff(block2);
        ball.shapeColor = "purple";
        music.play();
    }

    if (ball.isTouching(block3)) {
        ball.bounceOff(block3);
        ball.shapeColor = "red";
        music.play();
    }

    if (ball.isTouching(block4)) {
        ball.bounceOff(block4);
        ball.shapeColor = "blue";
        music.play()
    }




    //add condition to check if box touching surface and make it box
}
