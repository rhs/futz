var http = require('http')

var port = 8080

var server = http.createServer(function (request, response) {
  console.log("Master request log: " + request.url)
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Master\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
