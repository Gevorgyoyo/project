var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var grass = require("Grass")
var xotaker = require("xotaker.js")
var xotakeraker = require("xotakeraker.js")
var tower = require("tower.js")
var golem = require("golem.js")

app.use(express.static("."));
app.get('/', function (req, res) {
	res.redirect('index.html');
});
server.listen(3000);

side = 35;
grassArr = [];
xotakerArr = [];
xotakerakerArr = [];
tower = [];
golemArr = [];


function genMatrix(side) {
	var matrix = []
	for (y = 0; y < side; y++) {
		marix[y] = []
		for (var x = 0; x < side; x++) {
			var random = Math.floor(Math.random() * 6)
			matrix[y][x] = random
		}
	}

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

}
io.on("drawmatrix", genMatrix)
function methods() {
	for (var i in grassArr) {
		grassArr[i].mult()
	}

	for (var i in xotakerArr) {
		xotakerArr[i].eat()
		xotakerArr[i].move()
		xotakerArr[i].mult()
		xotakerArr[i].die()
	}



	for (var i in xotakerakerArr) {
		xotakerakerArr[i].eat()
		xotakerakerArr[i].move()
		xotakerakerArr[i].mult()
		xotakerakerArr[i].die()
	}

	for (var i in tower) {
		tower[i].eat();
		tower[i].spawn();
	}

	for (var i in golemArr) {
		golemArr[i].eat();
	}

}