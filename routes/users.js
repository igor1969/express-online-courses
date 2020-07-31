var express = require('express');
var router = express.Router();

/* GET users listing. */
const users = ['Gogi', 'Masha', 'Viki', 'John', 'Michel']

router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'User\'s List:',
    name: users
  });
});

module.exports = router;
