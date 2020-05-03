const express = require("express");
const port = 3000;
const app = express();


app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        console.log("Error: current day is equal to: " + currentDay);


    }

res.render('list', {kindOfDay: day});




    
    // res.sendFile(__dirname + "/index.html") == STATIC USE WEBSITE
});













//Console
app.listen(port, function(){
    console.log("Server is running on port 3000");
});