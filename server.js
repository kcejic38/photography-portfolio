var express = require("express");
var path = require("path");
var request = require("request");
var app = express();
var twentyFiveMinutes = 1000 * 60 * 25;

app.use(express.static('public'))

app.get("/", function(req, res) {
  res.redirect("/fogCity")
})
app.get("/fogCity", function(req, res) {
  res.sendFile(path.join(__dirname, './views/fogCity.html'));
})
app.get("/sunset", function(req, res) {
  res.sendFile(path.join(__dirname, './views/sunset.html'));
})
app.get("/people", function(req, res) {
  res.sendFile(path.join(__dirname, './views/people.html'));
})
app.get("/travel", function(req, res) {
  res.sendFile(path.join(__dirname, './views/travel.html'));
})
app.get("/whiteAndBlack", function(req, res) {
  res.sendFile(path.join(__dirname, './views/whiteAndBlack.html'));
})

setInterval(function(){
    request('http://www.katarinasvorcan.com/', function (error, response, body) {
  	console.log('Pinged heroku app again!');
  });
}, twentyFiveMinutes); //ping heroku every 25 minutes to prevent sleep

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Photo gallery app listening on port ' + port + '!')
})