// models/exam.model.js
const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Exam", examSchema);
