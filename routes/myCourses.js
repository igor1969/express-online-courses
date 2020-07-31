const express = require('express');
const router = express.Router();

const myCourses = [
  {id: '1', title: 'Angular', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '2', title: 'Vue', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '3', title: 'React', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
]

router.get('/', function(req, res, next) {
  res.render('my-courses', {
    header: 'Мои Курсы',
    myCourses
  });
});


module.exports = router;
