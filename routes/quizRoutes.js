const express = require('express');
const { createQuiz, getQuizzesByCourse, getQuizById, updateQuiz, deleteQuiz } = require('../controllers/quizController');
const router = express.Router();


router.post('/:courseId/quizzes', createQuiz);


router.get('/:courseId/quizzes', getQuizzesByCourse);

router.get('/:id', getQuizById);

router.put('/:id', updateQuiz);

router.delete('/:id', deleteQuiz);

module.exports = router;
