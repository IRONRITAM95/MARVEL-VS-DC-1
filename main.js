marvel = "" ;
dc = "" ; 
leftwristx = "" ;
leftwristy = "" ;
rightwristx = "" ;
rightwristy = "" ;

function preload(){
    marvel = loadSound("MCU.mp3");
    dc = loadSound("DCEU.mp3");
}

function setup(){
    canvas = createCanvas(680,440);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',posegot);
}

function modelLoaded(){
    console.log("POSENET INITIALIZED");
}

function posegot(results){
if(results.length>0){
    console.log(results);
    leftwristx = results[0].pose.leftWrist.x ;
    leftwristy = results[0].pose.leftWrist.y ;
    rightwristx = results[0].pose.rightWrist.x ;
    rightwristy = results[0].pose.rightWrist.y ;
}
}

function draw(){
    image(video,0,0, 680,440);
}