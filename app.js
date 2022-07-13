const express = require("express");
const bodyParser = require("body-parser");

var userInputs = [];
var workItems =[];

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    var day = today.toLocaleDateString("en-US",options);

    res.render("list",{listTitle: day,newListItem:userInputs});

});

app.post("/",function(req,res){
   console.log(req.body);

    var item = req.body.newItem;
    if(req.body.list == "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        userInputs.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newListItem:workItems});
});


app.listen(3000,function(){
    console.log("server started on port 3000")
})