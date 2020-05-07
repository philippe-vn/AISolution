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
const http = require('http')

const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})