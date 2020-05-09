const express = require("express");
const app = express();
const port = 80;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(reg, res){
    res.render("list");
});






// == STATIC USE WEBSITE
// res.sendFile(__dirname + "/index.html");

//Console
app.listen(port, function(){
    console.log("Server is running on port 80");
});

