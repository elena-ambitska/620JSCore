import getInfo from './personalmodule.js';
import http from 'http';



http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html charset=utf8'
    });
    
    response.end(getInfo());
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');