const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('create', {
    name: 'Ivan Draga',
    title: 'Заполните форму, чтобы создать собственный курс',
  });
});

module.exports = router;
