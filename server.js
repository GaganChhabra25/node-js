var http = require('http');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type' : 'text/plain'});
	res.write("Welcome to my site\n");
	setTimeout(function() {   		// First "Welcome to my site" will be printed, then wait for 2 seconds , and then "Mr gagan will be printed
	    res.end("Mr Gagan\n");		// It doesnt mean like server is in sleep for 2 seconds. It can handle multiple requests
	}, 2000);
});
server.listen(1337);
console.log("***Server Running");
