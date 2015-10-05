http = require('http');

server = http.createServer(function (req, res) {
  res.end("Hello World");
})

console.log("Node server listening on port 3000");

server.listen(3000)