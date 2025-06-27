// models/question.model.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [String], // array of 4 options
  correctAnswer: { type: Number, required: true }, // index of correct option
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // optional
});

module.exports = mongoose.model("Question", questionSchema);
