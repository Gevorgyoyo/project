var socket = io();

function setup() {
	frameRate(5);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
}

function serverdraw() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {

				fill("green");

			}
			else if (matrix[y][x] == 2) {
				fill("yellow");
			}

			else if (matrix[y][x] == 3) {
				fill("red");
			}

			else if (matrix[y][x] == 4) {
				fill("magenta");
			}

			else if (matrix[y][x] == 5) {
				fill("gray");
			}

			else if (matrix[y][x] == 0) {
				fill("#acacac");
			}

			rect(x * side, y * side, side, side)

			/*fill("white")
			text(x + " " + y, x * side + side / 2, y * side + side / 2)*/
		}
	}
}
	io.on("runmatrix", serverdraw)



