function initialize() {

	container = document.getElementById("container");
	
	playButton = document.getElementById("playButton");
	ruleButton = document.getElementById("ruleButton");
	ruleDisplay = document.getElementById("rules");
	title = document.getElementById("title");

	char_1 = document.getElementById("char_1");
	char_2 = document.getElementById("char_2");

	drink_1 = document.getElementById("drink_1");
	drink_2 = document.getElementById("drink_2");

	pizza_1 = document.getElementById("pizza_1");
	pizza_2 = document.getElementById("pizza_2");

	score = document.getElementById("score");
	live = document.getElementById("lives");

	points = 0;
	lives = 1;

	left = false;
	right = false;	

}

document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);

function keyDownHandler(event) {

	if (event.keyCode == 37) {
		left = true;
	}

	if  (event.keyCode == 39) {
		right = true;
	}

}

function keyUpHandler(event) {

	if (event.keyCode == 37) {
		left = false;
	}

	if  (event.keyCode == 39) {
		right = false;
	}

}

function rule() {

	if (ruleDisplay.style.display == "none") {
		ruleDisplay.style.display = "block";
		title.style.top = "20px";
	}

	else {
		ruleDisplay.style.display = "none";
		title.style.top = "240px";
	}

}

function play() {

	random_1 = (Math.floor((Math.random() * 10) + 1));
	random_2 = (Math.floor((Math.random() * 10) + 1));

	if (random_1 == 1 || random_1 == 2) {
		char_1.style.background= "url(images/kat.png)";
	}

	else if (random_1 == 3 || random_1 == 4) {
		char_1.style.background = "url(images/kelly.png)";
	}

	else if (random_1 == 5 || random_1 == 6) {
		char_1.style.background = "url(images/laura.png)";
	}

	else if (random_1 == 7 || random_1 == 8) {
		char_1.style.background = "url(images/rozi.png)";
	}

	else if (random_1 == 9 || random_1 == 10) {
		char_1.style.background = "url(images/tif.png)";
	}

	if (random_2 == 1 || random_2 == 2) {
		char_2.style.background = "url(images/kat.png)";
	}

	else if (random_2 == 3 || random_2 == 4) {
		char_2.style.background = "url(images/kelly.png)";
	}

	else if (random_2 == 5 || random_2 == 6) {
		char_2.style.background = "url(images/laura.png)";
	}

	else if (random_2 == 7 || random_2 == 8) {
		char_2.style.background = "url(images/rozi.png)";
	}

	else if (random_2 == 9 || random_2 == 10) {
		char_2.style.background = "url(images/tif.png)";
	}

	container.style.background = "url(bgImages/betterCoffeeShop.jpg)";
	
	playButton.style.display = "none";
	ruleButton.style.display = "none";
	ruleDisplay.style.display = "none";
	title.style.display = "none";

	char_1.style.display = "block";
	char_2.style.display = "block";

	//drink_1.style.display = "block";
	//drink_2.style.display = "block";

	//pizza_1.style.display = "block";
	//pizza_2.style.display = "block";

	score.style.display = "block";
	live.style.display = "block";

	deg = 0;

	drink_x_1 = pizza_x_1 = 1050;
	drink_y_1 = pizza_y_1 = 200;
	drink_dy_1 = pizza_dy_1 = 0;	

	drink_x_2 = pizza_x_2 = 300;
	drink_y_2 = pizza_y_2 = 200;
	drink_dy_2 = pizza_dy_2 = 0;

	star_x = 300;
	star_y = 200;
	star_dy = 0;

	function frame() {

		deg += 3;

		if (star_dy != 0) {
			star.style.display = "block";
			star_x += 5;
			star_y -= star_dy;
			star_dy -= 0.13;
			star.style.left = star_x + "px";
			star.style.top = star_y + "px";			
		}

		else {
			if (Math.floor((Math.random() * 200) + 1) == 4) {
				star_x = 300;
				star_y = 200;
				star_dy = 5;
				star.style.display = "block";
			}
		}		

		if (drink_dy_1 != 0) {
			drink_1.style.display = "block";
			drink_x_1 -= 5;
			drink_y_1 -= drink_dy_1;
			drink_dy_1 -= 0.13;		
			drink_1.style.left = drink_x_1 + "px";
			drink_1.style.top = drink_y_1 + "px";
			drink_1.style.transform = "rotate(" + deg + "deg)";
		}

		else {
			if (Math.floor((Math.random() * 100) + 1) == 4) {
				drink_x_1 = 1050;
				drink_y_1 = 200;
				drink_dy_1 = 5;
				//drink_1.style.display = "block";
			}
		}

		if (drink_dy_2 != 0) {
			drink_2.style.display = "block";
			drink_x_2 += 5;
			drink_y_2 -= drink_dy_2;
			drink_dy_2 -= 0.15;
			drink_2.style.left = drink_x_2 + "px";
			drink_2.style.top = drink_y_2 + "px";
			drink_2.style.transform = "rotate(" + deg + "deg)";
		}

		else {
			if (Math.floor((Math.random() * 100) + 1) == 4) {
				drink_x_2 = 300;
				drink_y_2 = 200;
				drink_dy_2 = 5;
				//drink_2.style.display = "block";
			}
		}

		if (pizza_dy_1 != 0) {
			pizza_1.style.display = "block";
			pizza_x_1 -= 5;
			pizza_y_1 -= pizza_dy_1;
			pizza_dy_1 -= 0.13;
			pizza_1.style.left = pizza_x_1 + "px";
			pizza_1.style.top = pizza_y_1 + "px";
			pizza_1.style.transform = "rotate(" + deg + "deg)";
		}

		else {
			if (Math.floor((Math.random() * 100) + 1) == 4) {
				pizza_x_1 = 1050;
				pizza_y_1 = 200;
				pizza_dy_1 = 5;
				//pizza_1.style.display = "block";
			}
		}

		if (pizza_dy_2 != 0) {
			pizza_2.style.display = "block";
			pizza_x_2 += 5;
			pizza_y_2 -= pizza_dy_2;
			pizza_dy_2 -= 0.13;
			pizza_2.style.left = pizza_x_2 + "px";
			pizza_2.style.top = pizza_y_2 + "px";
			pizza_2.style.transform = "rotate(" + deg + "deg)";
		}

		else {
			if (Math.floor((Math.random() * 100) + 1) == 4) {
				pizza_x_2 = 300;
				pizza_y_2 = 200;
				pizza_dy_2 = 5;
				//pizza_2.style.display = "block";
			}
		}

		if (lives < 1) {
			alert("Game Over");
			document.location.reload();
		}	

		if (left) {
			char_1.style.opacity = "0.85";
		}

		if (!left) {
			char_1.style.opacity = "1";
		}

		if (right) {
			char_2.style.opacity = "0.85";
		}

		if (!right) {
			char_2.style.opacity = "1";
		}

		if (star_y > 600) {
			star_dy = -star_dy * 0.7;			
		}

		else if (star_x == 800 && right) {
			star.style.display = "none";
			points += 500;
			score.innerHTML = "Score: " + points;
			lives++;
			live.innerHTML = "Lives: " + lives;
			star_dy = 0;
			star_x = 300;
			star_y = 200;
		}

		else if (star_x == 1100) {
			star.style.display = "none";
			star_dy = 0;
		}


		if (drink_y_1 > 600) {
			drink_dy_1 = -drink_dy_1 * 0.7;
			lives--;
			live.innerHTML = "Lives: " + lives;
		}

		else if (drink_x_1 == 500 && left) {
			drink_1.style.display = "none";
			points += 100;
			score.innerHTML = "Score: " + points;
			drink_dy_1 = 0;
			drink_x_1 = 1050;
			drink_y_1 = 200;
		}

		else if (drink_x_1 == 300) {
			drink_1.style.display = "none";
			drink_dy_1 = 0;
		}


		if (drink_y_2 > 600) {
			drink_dy_2 = -drink_dy_2 * 0.7;
			lives--;
			live.innerHTML = "Lives: " + lives;
		}	

		else if (drink_x_2 == 800 && right) {
			drink_2.style.display = "none";
			points += 100;
			score.innerHTML = "Score: " + points;
			drink_dy_2 = 0;
			drink_x_2 = 300;
			drink_y_2 = 200;
		}

		else if (drink_x_2 == 1100) {
			drink_2.style.display = "none"; 
			drink_dy_2 = 0;
		}


		if (pizza_y_1 > 600) {
			pizza_dy_1 = -pizza_dy_1 * 0.7;			
		}

		else if (pizza_x_1 == 500 && left) {
			pizza_1.style.display = "none";
			lives--;
			live.innerHTML = "Lives: " + lives;
			pizza_dy_1 = 0;
			pizza_x_1 = 1050;
			pizza_y_1 = 200;
		}
		
		else if (pizza_x_1 == 300) {
			pizza_1.style.display = "none";
			pizza_dy_1 = 0;
		}


		if (pizza_y_2 > 600) {
			pizza_dy_2 = -pizza_dy_2 * 0.7;			
		}

		else if (pizza_x_2 == 800 && right) {
			pizza_2.style.display = "none";
			lives--;
			live.innerHTML = "Lives: " + lives;
			pizza_dy_2 = 0;
			pizza_x_2 = 300;
			pizza_y_2 = 200;
		}
		
		else if (pizza_x_2 == 1100) {
			pizza_2.style.display = "none";
			pizza_dy_2 = 0;
		}

		requestAnimationFrame(frame);

	}

	frame();

}