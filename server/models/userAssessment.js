const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Types } = mongoose;

const userAssessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assessment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assessment",
    required: true,
  },
  responses: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      selectedOption: { type: Number, required: true },
      isCorrect: { type: Boolean, required: true },
      // Add a field to store the difficulty level of the next question
      nextQuestionDifficulty: { type: Number, required: true },
    },
  ],
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  score: {
    type: Number,
    required: [true, "Please provide score for the test"],
    default: 0,
  },
  // Other details like score, performance metrics, etc. can be added here
});

module.exports = mongoose.model("UserAssessment", userAssessmentSchema);
