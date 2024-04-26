const express = require("express");
const router = express.Router();
const {
  createUserAssessment,
  updateUserAssessment,
  deleteUserAssessment,
  getUserAssessmentById,
  getAllUserAssessments,
} = require("../controllers/userAssessmentController");
const { isLoggedIn } = require("../middlewares/user");

// UserAssessment routes
router.post("/createUserAssessment", isLoggedIn, createUserAssessment);
router.put("/updateUserAssessment/:id", isLoggedIn, updateUserAssessment);
router.delete("/deleteUserAssessment/:id", isLoggedIn, deleteUserAssessment);
router.get("/getUserAssessment/:id", isLoggedIn, getUserAssessmentById);
router.get("/getAllUserAssessments", isLoggedIn, getAllUserAssessments);

module.exports = router;
