const http = require('http');

const userdata = [
  {
    name: 'shivam',
    age: 30,
    email: 'shivam@gmail.com'
  },
  {
    name: 'rohit',
    age: 30,
    email: 'shivam@gmail.com'
  },
  {
    name: 'munnu',
    age: 30,
    email: 'shivam@gmail.com'
  }
];

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userdata));
    res.end();
}).listen(2000);