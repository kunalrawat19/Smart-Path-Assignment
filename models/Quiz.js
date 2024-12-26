const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: String,
  question: String,
  options: [String],
  correctAnswer: String,
});

const QuizSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  questions: [QuestionSchema],
});

module.exports = mongoose.model('quiz', QuizSchema);
