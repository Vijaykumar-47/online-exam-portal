const express = require("express");
const router = express.Router();
const Exam = require("../models/exam.model");

// Create New Exam
router.post("/", async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const newExam = new Exam({ title, description, questions });
    await newExam.save();
    res.status(201).json({ message: "Exam created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Exams
router.get("/", async (req, res) => {
  const exams = await Exam.find().populate("questions");
  res.json(exams);
});

module.exports = router;
