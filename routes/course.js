const express = require('express');
const router = express.Router();

const courses = [
  {id: '1', title: 'Angular', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '2', title: 'Vue', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '3', title: 'React', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '4', title: 'Svelte', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '5', title: 'Nuxt', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '6', title: 'Next', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '7', title: 'Gatsby', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '8', title: 'Flutter', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '9', title: 'React-Native', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
];

const schedule =  [
  {id: '1', title: 'Вводное занятие', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '2', title: 'Урок 1', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '3', title: 'Урок 2', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '4', title: 'Урок 3', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '5', title: 'Урок 4', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '6', title: 'Урок 5', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '7', title: 'Урок 6', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '8', title: 'Урок 7', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
  {id: '9', title: 'Урок 8', description: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
];



router.get('/', function(req, res, next) {
  res.render('course', {
    header: 'Курс',
    courses,
    schedule
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  const result = courses.filter(item => item.id === id)
  const course = result[0]

  res.render('course', {
    header: 'Курс',
    title: course.title,
    description: course.description,
    schedule
  });
})

module.exports = router;
