
class Circle{
	
	constructor(){
		this.x = getRandomFloat(0, 900);
		this.y = 500;
		this.size = getRandomFloat(10, 30);
		this.speed = getRandomFloat(2, 5)
	}
	
	destroy() {
		this.x = getRandomFloat(0, 900);
		this.y = 500;
		this.size = getRandomFloat(10, 30);
		this.speed = getRandomFloat(2, 5)
	}
	
}

var canvas = document.getElementById("myCanvas"),
	    context = canvas.getContext("2d");

context.fillRect(0, 0, 900, 500);

var circles = [];
for(var i = 0; i < 10; i++){
	circles[i] = new Circle();
}

let timerId = setInterval(update, 10);

function update(){
	
	context.fillStyle = "black";
	context.fillRect(0, 0, 900, 500);
	
	for(var i = 0; i < 10; i++){
		context.fillStyle = "white";
		context.beginPath();
		context.arc(circles[i].x, circles[i].y, circles[i].size, 0, 2 * Math.PI);
		context.fill();
	}
	for(var i = 0; i < 10; i++){
		circles[i].y -= circles[i].speed;
		if(circles[i].y <= 0){
			circles[i].destroy();
		}
		else{
			for(var j = 0; j < 10; j++){
				if(j != i){
					var result = Math.sqrt(Math.pow(circles[i].x - circles[j].x, 2) + Math.pow(circles[i].y - circles[j].y, 2));
					if (result < circles[i].size + circles[j].size){
						circles[i].size += circles[j].size/2;
						circles[j].destroy();
					}
				}
			}
		}
	}
}

function getRandomFloat(min, max) {
		return Math.random() * (max - min) + min;
}