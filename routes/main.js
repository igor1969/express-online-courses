const express = require('express');
const router = express.Router();

const options = ['Создать курс', 'Редактировать курс', 'Смотреть все курсы']

router.get('/', function(req, res, next) {
  res.render('main', {
    name: 'Ivan Draga',
    title: 'Образовательная платформа с возможностью смотреть и\n' +
      'редактировать медиа контент',
    cardTitle: options,
  });
});

module.exports = router;
