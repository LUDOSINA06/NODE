const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end('<h1>Hello Node !!!!</h1>\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Le serveur fonctionne sur http://localhost:${port}`);
});
