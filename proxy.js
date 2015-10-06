http = require('http');

server = http.createServer(function (req, res) {
  request = http.get('http://node-server:3000', function (response) {
    response.pipe(res);
  })
})

console.log("Node server listening on port 3000");

server.listen(3000)