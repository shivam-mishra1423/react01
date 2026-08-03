const http = require('http');

http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    if (req.url == '/') {
        res.end("<h1>Home Page</h1>");
    }
    else if (req.url == '/home') {
        res.end("<h1>Welcome Home</h1>");
    }
    else {
        res.end("<h1>404 Page Not Found</h1>");
    }

}).listen(5500);

console.log("Server running on http://localhost:5500");