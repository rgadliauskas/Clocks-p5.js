function setup() {
	createCanvas(400,400);
	angleMode(DEGREES);
	
}
function draw(){
	background(0);

var hr=hour();
var min=minute();
var sec=second();

fill(255);
noStroke();
text(hr+":"+min+":"+sec, 180,380);


translate(200,200);
rotate(-90);


strokeWeight(8);
stroke(255,100,150);
noFill();
var end1=map(sec, 0, 60, 0, 360);
arc(0,0,300,300, 0,end1);

push();
rotate(end1);
stroke(255,100,150);
line(0,0,100,0);
pop();


strokeWeight(8);
stroke(100,150,200);
noFill();
var end2=map(min, 0, 60, 0, 360);
arc(0,0,280,280, 0,end2);

push();
rotate(end2);
stroke(100,150,200);
line(0,0,80,0);
pop();



strokeWeight(8);
stroke(255,200,135);
noFill();
var end3=map(hr % 12,0,12,0,360);
arc(0,0,260,260, 0,end3);

push();
rotate(end3);
stroke(255,200,135);
line(0,0,60,0);
pop();




 
}