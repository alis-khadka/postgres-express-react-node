// This will be our application entry. We'll setup out server here.
const http = require('http');
const app = require('../app'); // Using the just created express app.

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server= http.createServer(app);
server.listen(port);