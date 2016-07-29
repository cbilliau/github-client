var express = require('express');
var app = express();
var port = process.env.PORT || 2000;


app.get('/api/check', function(req, res){
  res.json({status: true, message: "Hello world!!"})
});

app.listen(port);
console.log("App listening on port "+ port);
