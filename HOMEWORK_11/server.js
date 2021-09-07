import os from 'os';
import http from 'http';
import path from 'path';
import {
    fileURLToPath
} from 'url';


http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html charset=utf8'
    });
    const userName = os.userInfo().username;
    const typeOS = os.type();
    const fileName = path.basename(fileURLToPath(
        import.meta.url));

    response.end('System work time: ' + Math.floor(os.uptime() / 60) + 'minutes<br/>' +
        'Current username: ' + userName + '<br/>' + 'Type OS: ' + typeOS + '<br/>' + 'Current work directory:' +
        path.resolve() + '<br/>' + 'Server file name:' + fileName);
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');