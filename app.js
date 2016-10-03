var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to the challenge!");
});

app.get("/speak/:animal", function(req, res){
  res.send("Welcome to the animal page!");
});

app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?")
})

app.listen(3000, function(){
  console.log("Serving demo at port 3000");
});
