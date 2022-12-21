// console.log("hellow world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');// for view the txt form 
  res.setHeader('Content-Type', 'text/plain');// for view the html form 
//   res.end('Hello World');
  res.end(`
  `)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});