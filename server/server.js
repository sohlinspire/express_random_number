var express = require("express");
var app = express();
var randomnumber = require('./modules/randomnumber.js');

app.get("/randomnumber", function(req, res){
  var ranNum = randomnumber(100, 1000000);
  console.log('request' + ranNum);
  res.send(ranNum.toString());
  //res.send({randomnumber: ranNum});
});


var path= require("path");
app.get("/*", function(req, res){

  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));



});
app.listen(5000, function(){
  console.log('listening on the port 5000');
});
