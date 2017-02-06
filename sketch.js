var x1 = 100;
var y1 = 100;
var x2 = 50;
var y2 = 50
xPosition = 100
function preload() {
pencil = loadImage ("assets/pencil.png")
}

function setup() {
createCanvas (windowHeight,windowWidth);
background (255,0,0);

}

function draw() {
fill (random(255), random(255), random(255))
 image (pencil, x1,y1, 50, 50);
if (keyIsDown(LEFT_ARROW))
x1-=5;

if (keyIsDown(RIGHT_ARROW))
x1+=5;

if (keyIsDown(UP_ARROW))
y1-=5;

if (keyIsDown(DOWN_ARROW))
y1+=5;

noFill()

fill(random(255), random(255), random(255));
ellipse (x2+100,y2+100,55,55);



if (keyIsDown(87))
y2-=5;

if (keyIsDown(68))
x2+=5;

if (keyIsDown(65))
x2-=5;

if (keyIsDown(83))
y2-=-5;



}