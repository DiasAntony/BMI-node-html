const express = require("express");
const bodyParser = require("body-parser");
// its allow find or store the value of post route or user inputs

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  //   res.sendFile("index.html");
  // console.log(__dirname + "/index.html");
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
  
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  //  req.body its parsed version of http request it give num1 num2 what user type alternative form data => name from html form inputs
  var result = num1 + num2;

  res.send("your result" + result);
});

app.post("/bmi", function (req, res) {
  var weight = parseFloat(req.body.weight);
  // var height = Math.pow(req.body.height, 2);
  var height=parseFloat(req.body.height)

  var bmi = Math.round(weight / (height*height));
  res.send("your BMI " +bmi)
});

app.listen(3000, function () {
  console.log("server created!!");
});
