const express = require('express');
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');
const quizController = require('../controllers/quizController');
const router = express.Router();


router.post('/', createCourse);

router.get('/', getCourses);

router.get('/:id', getCourseById);

router.put('/:id', updateCourse);

router.delete('/:id', deleteCourse);


// Quizzes nested under a course
router.post('/:courseId/quizzes', quizController.createQuiz);
router.get('/:courseId/quizzes', quizController.getQuizzesByCourse);

module.exports = router;
