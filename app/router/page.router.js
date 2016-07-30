var express = require('express');
var router = express.Router();

router.get('/check/status', function(req, res){
  res.json({
    status: true
  });
});

module.exports = router;
