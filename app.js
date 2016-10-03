var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to the routing challenge!");
});

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  console.log(animal);
  switch(animal){
    case "pig":
    res.send("The " + animal + " says 'Oink'");
    break;
    case "cow":
    res.send("The " + animal + " says 'Moo'");
    break;
    case "dog":
    res.send("The " + animal + " says 'Woof Woof!'");
  }
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
