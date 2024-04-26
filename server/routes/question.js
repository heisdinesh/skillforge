const express = require("express");
const router = express.Router();
const {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
  getNextQuestion,
  getAllQuestions,
} = require("../controllers/questionController");
const { isLoggedIn } = require("../middlewares/user");

// Question routes
router.route("/createQuestion").post(isLoggedIn, createQuestion);
router.route("/updateQuestion/:id").put(isLoggedIn, updateQuestion);
router.route("/deleteQuestion/:id").delete(isLoggedIn, deleteQuestion);
router.route("/getQuestion/:id").get(isLoggedIn, getQuestion);
router.route("/getNextQuestion").post(isLoggedIn, getNextQuestion);
router.route("/getAllQuestions").get(isLoggedIn, getAllQuestions);

module.exports = router;
