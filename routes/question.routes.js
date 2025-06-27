const express = require("express");
const router = express.Router();
const Question = require("../models/question.model");

// Add Question (admin only)
router.post("/", async (req, res) => {
  try {
    const { questionText, options, correctAnswer } = req.body;
    const newQuestion = new Question({ questionText, options, correctAnswer });
    await newQuestion.save();
    res.status(201).json({ message: "Question added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Questions
router.get("/", async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

module.exports = router;
