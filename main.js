noseX = 0
noseY = 0
difference = 0
rightWristX = 0
leftWristX = 0


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is Initialized!');
}

function draw()
{
    background('#fffdbf')
    document.getElementById("square_side").innerHTML = "The square sides are: "+ difference+" px";
    fill('#ffc7f0');
    stroke('#4a0137');
    textSize(difference);
    text("Sereen",noseX, noseY);
    //circle(noseX, noseY,difference)
    //square(noseX, noseY, difference)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX " + noseX +"noseY "+ noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX "+ leftWristX +"rightWristX"+ rightWristX);
        difference = floor(leftWristX-rightWristX)
    }
}