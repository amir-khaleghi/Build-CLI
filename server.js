import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world!');
});

server.listen(4000, () => {
  console.log('server is listening on port 4000');
});
