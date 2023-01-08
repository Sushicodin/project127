music_one="";
music_two="";

function preload(){
music_one=loadSound("music.mp3");
music_two=loadSound("music2.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide();
}

function draw(){
    image(webcam,0,0,600,500);
}