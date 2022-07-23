nose_x= 0;
nose_y= 0;
function preload(){
 mustache= loadImage("mustache.png");
        
}
function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("model is initialized")
}

function draw(){
    image(video , 0 , 0 , 400 ,400);
    imageMode(CENTER);
    image(mustache,nose_x , nose_y ,30,30);
}


function take_snapshot(){
    save("myfilterimage.png");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nose_x= (results[0].pose.nose.x)-5;
        nose_y= results[0].pose.nose.y;
        console.log("nose_x = "+results[0].pose.nose.x);
        console.log("nose_y = "+results[0].pose.nose.y);
    }
}