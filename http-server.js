var http = require('http');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type' : 'text/plain'});
	res.write("Welcome to my site\n");
	setTimeout(function() {   	
	    res.end("Mr Gagan\n");
	}, 2000);
});
server.listen(1337);
console.log("***Server Running");
