var express = require('express');
var router = express.Router();

// GET index.html from server
router.get('/', function(req, res){
  // res.sendFile('/index.html');
  res.json({
    status: true
  })
});

module.exports = router;
