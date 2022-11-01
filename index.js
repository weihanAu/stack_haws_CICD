const express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("hello world");
    });

    app.get("/login",function(req,res){ 
        res.send("<div>" + req.query.name + "</div>")
     });

    app.listen(8080,()=>{
        console.log('successfully');
    });