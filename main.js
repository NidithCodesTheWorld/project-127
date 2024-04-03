song = "";

function preload()
{
	song = loadSound("harryPotter.mp3");
}

function setup() 
{
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

function modelLoaded()
{
	console.log('PoseNet is Intialized')
}

function draw() 
{
	image(video, 0, 0, 600, 500);
}

function play()
{
	song.play();
}