var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to the routing challenge!");
});

app.get("/speak/:animal", function(req, res){
  var sounds = {
    pig: "Oink",
    dog: "Woof, Woof!",
    cat: "I hate you human",
    fish: "...",
    cow: "Moo"
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:print/:num", function(req, res){
  var print = req.params.print + " ";
  var num = Number(req.params.num);
  var i = 0;
  var str = "";
  while (i < num) {
    str += print;
    i++
  };
  res.send(str);
});

app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?")
})

app.listen(3000, function(){
  console.log("Serving demo at port 3000");
});
