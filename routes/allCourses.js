const express = require('express');
const router = express.Router();



router.get('/', function(req, res, next) {
  const courses = [
    {id: 1, title: 'Angular', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 2, title: 'Vue', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 3, title: 'React', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 4, title: 'Svelte', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 5, title: 'Nuxt', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 6, title: 'Next', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 7, title: 'Gatsby', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 8, title: 'Flutter', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {id: 9, title: 'React-Native', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  ]
  res.render('all-courses', {
    header: 'Все курсы',
    courses
  });
});

module.exports = router;
