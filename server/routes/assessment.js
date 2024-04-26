const express = require("express");
const router = express.Router();
const {
  createAssessment,
  updateAssessment,
  deleteAssessment,
  getAssessmentById,
  getAllAssessments,
} = require("../controllers/assessmentController");
const { isLoggedIn } = require("../middlewares/user");

// Assessment routes
router.route("/createAssessment").post(isLoggedIn, createAssessment);
router.route("/updateAssessment/:id").put(isLoggedIn, updateAssessment);
router.route("/deleteAssessment/:id").delete(isLoggedIn, deleteAssessment);
router.route("/getAssessment/:id").get(isLoggedIn, getAssessmentById);
router.route("/getAllAssessments").get(isLoggedIn, getAllAssessments);

module.exports = router;
