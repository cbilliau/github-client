var express = require('express');
var config = require('./app/config/config');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(config.port, function(err){
  if(err) {
    console.log("Error in connecting..");
  }
  console.log("App connected to "+config.port);
});
