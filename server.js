var express = require("express");
var path = require("path");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, './fogCity.html'));
})
app.get("/fogCity.html", function(req, res) {
  res.sendFile(path.join(__dirname, './fogCity.html'));
})
app.get("/sunset.html", function(req, res) {
  res.sendFile(path.join(__dirname, './sunset.html'));
})
app.get("/people.html", function(req, res) {
  res.sendFile(path.join(__dirname, './people.html'));
})
app.get("/travel.html", function(req, res) {
  res.sendFile(path.join(__dirname, './travel.html'));
})
app.get("/whiteAndBlack.html", function(req, res) {
  res.sendFile(path.join(__dirname, './whiteAndBlack.html'));
})
app.get("/index.css", function(req, res) {
  res.sendFile(path.join(__dirname, './index.css'));
})
app.get("/index.js", function(req, res) {
  res.sendFile(path.join(__dirname, './index.js'));
})

app.listen(process.env.PORT || 3000, function() {
  console.log('Example app listening on port 3000!')
})