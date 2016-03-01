const mongodb = require('mongodb');


mongodb.connect('mongodb://docker:27017/jserver', function() {
	console.log(arguments);
})


require('http').createServer(function(req, res) {
  res.end("Hello World!\n");
}).listen(9000);
