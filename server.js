var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


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

 
functio genMatrix(side){
    var matrixx=[]
    for(y=0;y<side;y++){
        marixx[y]=[]
        for(var x=0;x<side;x++){
            var random=Math.floor(Math.random()*6)
            matrixx[y][x]=
        }
    }
}
function methods{
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