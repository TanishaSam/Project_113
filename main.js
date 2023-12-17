function preload(){};

function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center();

    video= createCapture(VIDEO)
    video.hide();
    video.center();
}

function draw() {
    image(video,100,80,300,250);

    stroke(0, 0, 160);
    fill(0, 0, 160);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(255, 255, 0);
    fill(255, 255, 0);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function snap(){
    save("img.png");
}