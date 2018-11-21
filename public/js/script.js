var ball;

function setup() {
	createCanvas(500,500);
	ball = new Ball();
}

function draw() {
	background(0);
	ball.update();
	ball.show();

}
