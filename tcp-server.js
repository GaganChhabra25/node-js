var tcp = require('net');
var PORT = 1337;
var HOST = "localhost";

console.log("***TCP Server Running");
console.log("**You are connected to " + HOST + " at port : " + PORT );

var server = tcp.createServer(function(socket) {
	console.log("** request sent to server**");
	
	socket.write("Hello\n");
	socket.write("gagan\n");
	
	socket.on('data', function(data) { 
	console.log("Data recieved from user = " + data);
		socket.write(data);
	console.log("Same data sent back to client");
	});
});
server.listen(1337);

