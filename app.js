const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

// const userInputs = [];
// const workItems =[];


const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true});

app.get("/",function(req,res){
    const day = date.getDate();
    res.render("list",{listTitle: day,newListItem:userInputs});

});

app.post("/",function(req,res){
   console.log(req.body);

   const item = req.body.newItem;
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

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("server started on port 3000")
})