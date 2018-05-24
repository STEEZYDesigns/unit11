// JavaScript source code
var http = require("http");

http.createServer(function (request, response) {

    //Sent the HTTP Header ; HTTP Status: 200 : OK ; COntent Type: text/plain
                //response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hello World, my name is Joe Morales'); 
    //Send the response body as "Hello World"
    response.end('\n Hello World \n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');