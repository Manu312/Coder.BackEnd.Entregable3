const http = require('http');
const API_BASE_PATH = '/api';
const API_VERSION = '/v1';
const port = 8000;

// Create a new server
const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});