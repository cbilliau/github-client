var express = require('express');
var pagerouter = require('./app/router/page.router');
var config = require('./app/config/config');

var app = express();

app.use(express.static(__dirname + '/public'));
// app.use('/', pagerouter);


app.listen(config.port, function(err){
  if(err) {
    console.log("Error in connecting..");
  }
  console.log("App connected to "+config.port);
});
