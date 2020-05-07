// const express = require("express");
// const port = 80;
// const app = express();


// app.set('view engine', 'ejs');

// app.use(express.static("public"));

// app.listen(port);

// res.sendFile(__dirname + "/index.html");

// == STATIC USE WEBSITE

//Console
// app.listen(port, function(){
    // console.log("Server is running on port 3000");
// });

// EXAMPLE
const http = require('http');

 const hostname = '127.0.0.1';
 const port = 80;

const server = http.createServer((req, res) => {
   res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  
 });

 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });