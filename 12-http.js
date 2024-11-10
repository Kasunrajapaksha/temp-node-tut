
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('welcome to our home page');
    } else if(req.url === '/about'){
        res.end('Here is short history');
    } else {
        res.end(`
        <h1>Ooops!</h1>
        <a href="/">back home</a>
        `);    
    }
;});

server.listen(4000);

