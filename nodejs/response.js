const http = require('http');

const server = http.createServer( (res,req) =>{
    req.write("shivam");

    req.end();
})

server.listen(4800);