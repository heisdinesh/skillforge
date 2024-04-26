const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  maxQuestions: { type: Number, default: 60 },
});

module.exports = mongoose.model("Assessment", assessmentSchema);
