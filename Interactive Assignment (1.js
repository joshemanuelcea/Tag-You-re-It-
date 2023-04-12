//Josh Emanuel Cea
//Pascal Huynh
//Web & FX: From Theory to Practice, 502-A22-LA, Section 00002
//Tag, you're it! - Interactive Assignment (15%)

//Instructions:
//Red player is the tagger and moves with the arrow keys
//Blue player is the runner and moves using the mouse
//Once the runner gets tagged 25 times, the game ends.

//Artist Statement: I looked back at games that all of us used to play as children and I thought it would be fun and intersting to make common game like "tag" through this software.

let x, y; // player/tagger position
let score = 0; // player score
let gameOver = false; // game over flag

function setup() {
	createCanvas(300, 300);
	x = width / 2;
	y = height / 2;
}

function preload() {
	pic=loadImage("grass.jpeg");
	
}

function draw() {
	background(255);
  image(pic, 0, 0);


// movement of player/tagger
	if (keyIsDown(LEFT_ARROW)) {
		x -= 14;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		x += 14;
	}
	if (keyIsDown(UP_ARROW)) {
		y -= 14;
	}
	if (keyIsDown(DOWN_ARROW)) {
		y += 14;
	}

//barriers for tagger
if(x>width){
	x=0
}	
if(y>height){
	y=0
}	
	
// draw player/tagger
	fill(255, 0, 0);
	ellipse(x, y, 20, 20);

// draw runner
  fill(0, 0, 139);
  ellipse(mouseX, mouseY, 20, 20);

// draw score
	textSize(20);
	textAlign(RIGHT, TOP);
	fill(240,248,255)
	text(score, width - 10, 10);

// when runner gets tagged
	if (dist(x, y, mouseX, mouseY) < 20) {
		// increase score
		score++;

// move runner to random location
		mouseX = random(width);
		mouseY = random(height);
	}

// check for game over
	if (score >= 25) {
		gameOver = true;
	}
	
	if (gameOver) {
		textSize(50);
		textAlign(CENTER, CENTER);
		text("Game Over!", width / 2, height / 2);
		
	}
	
}	