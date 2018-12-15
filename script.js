var socket = io();

function setup() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				var gr = new Grass(x, y)
				grassArr.push(gr)
			}
			else if (matrix[y][x] == 2) {
				var xt = new Xotaker(x, y)
				xotakerArr.push(xt)
			}

			else if (matrix[y][x] == 3) {
				var xtt = new Xotakeraker(x, y)
				xotakerakerArr.push(xtt)
			}

			else if (matrix[y][x] == 4) {
				var t = new Tower(x, y)
				tower.push(t)
			}

			else if (matrix[y][x] == 5) {
				var g = new Golem(x, y)
				golemArr.push(g)
			}
		}
	}

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
			text(x + " " + y, x * side + side / 2, y * side + side / 2)
*/

		}
	}
}
	io.on("runmatrix", serverdraw)



