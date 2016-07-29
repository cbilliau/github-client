var express = require('express');
var pagerouter = require('./app/router/page.router.js');


var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/', pagerouter);

app.listen(3000, function(err){
  if(err) {
    console.log("Error in connecting..");
  }
  console.log("App connected to "+3000);
});
