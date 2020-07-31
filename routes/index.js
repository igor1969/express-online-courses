var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Excellent Online JavaScript Bundle' });
});

module.exports = router;
