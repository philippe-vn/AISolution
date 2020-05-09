const express = require("express");
const port = 5000;
const app = express();




app.use(express.static("public"));


app.set('view engine', 'ejs');

res.sendFile(__dirname + "/index.html");

// == STATIC USE WEBSITE

//Console
app.listen(port, function(){
    console.log("Server is running on port 3000");
});

