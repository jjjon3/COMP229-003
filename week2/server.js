/*const hello = require('./hello');
hello.sayHello();
*/
/*
const http = require('http');
http.createServer((req, res) => {
res.writeHead(200, {
'Content-Type': 'text/plain'
});
res.end('Hello World');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
*/
const connect = require('connect');
const app = connect();
function helloWorld(req, res, next) {
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World');
};
app.use(helloWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');