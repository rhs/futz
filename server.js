var http = require('http')

var port = 8080

xvar server = http.createServer(function (request, response) {
  console.log("PR CrashLoopBackOff Log: " + request.url)
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('PR CrashLoopBackOff\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
