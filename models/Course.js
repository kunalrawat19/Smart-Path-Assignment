const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
  description: String,
  videoLink: String,
  duration: Number,
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  chapters: [ChapterSchema],
  instructorName: String,
  language: String,
  level: String,
  price: Number,
  status: { type: String, default: "draft" },
  visibility: { type: String, default: "private" },
});

module.exports = mongoose.model('Course', CourseSchema);
