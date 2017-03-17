var tcp = require('net');
var PORT = 1337;
var HOST = "localhost";
var sockets = [];

console.log("***TCP Server Running");
console.log("**You are connected to " + HOST + " at port : " + PORT );

var server = tcp.createServer(function(socket) {
	sockets.push(socket);
	socket.write("Total open connections are : " + sockets.length + "\n");
	socket.write("Connection established with server. Type something: \n");
	socket.on('data', function(data) {
		for(var x=0; x<sockets.length; x++) {
			sockets[x].write(data);
		}
	});
});
server.listen(1337);

