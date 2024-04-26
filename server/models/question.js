const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Types } = mongoose;

const questionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: [true, "Please provide topic"],
  },
  subTopic: {
    type: String,
  },
  difficulty: {
    type: String,
    required: [true, "Please provide difficulty"],
  },
  options: [
    {
      type: String,
      required: [true, "Please provide options"],
    },
  ],
  correctAnswer: {
    type: String,
    required: [true, "Please provide correctAnswer"],
  },
  resource: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", questionSchema);
