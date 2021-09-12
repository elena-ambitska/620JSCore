import http from 'http';
import fs from 'fs';



http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'origin, content-type, accept'
    });
    if (request.url == '/books') {
        fs.readFile('./books.json', (err, data) => {
            response.end(data);
        })
    } else {
        const data = new Date();
        const time = data.toString();

        response.end('Your vote is accepted: ' + time);
    }
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');