const UserAssessment = require("../models/userAssessment"); // Import the UserAssessment model
const mongoose = require("mongoose");
const CustomError = require("../utilis/customError");
const stringConstants = require("../utilis/strringConstants");

exports.createUserAssessment = async (req, res, next) => {
  const { assessment, responses, startTime, endTime, score } = req.body;
  const userId = req.user.id;

  try {
    const userAssessment = await UserAssessment.create({
      user: userId,
      assessment,
      responses,
      startTime,
      endTime,
      score,
    });

    res.status(201).json({
      success: true,
      message: "User assessment created successfully",
      data: userAssessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.updateUserAssessment = async (req, res, next) => {
  const userAssessmentId = req.params.id;
  const { question, selectedOption, isCorrect, nextQuestionDifficulty } =
    req.body;

  try {
    const userAssessment = await UserAssessment.findById(userAssessmentId);

    if (!userAssessment) {
      return next(new CustomError(stringConstants.userAssessmentNotFound, 404));
    }

    // Check if the user trying to update the assessment is the owner
    if (userAssessment.user.toString() !== req.user.id) {
      return next(new CustomError(stringConstants.unauthorized, 403));
    }

    // Add the new response to the responses array
    userAssessment.responses.push({
      question,
      selectedOption,
      isCorrect,
      nextQuestionDifficulty,
    });

    // If the new response is correct, increase the score by 1
    if (isCorrect) {
      userAssessment.score += 1;
    }

    // Update the userAssessment
    const updatedUserAssessment = await userAssessment.save();

    res.status(200).json({
      success: true,
      message: "User assessment updated successfully",
      data: updatedUserAssessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.deleteUserAssessment = async (req, res, next) => {
  const userAssessmentId = req.params.id;

  try {
    const userAssessment = await UserAssessment.findById(userAssessmentId);

    if (!userAssessment) {
      return next(new CustomError(stringConstants.userAssessmentNotFound, 404));
    }

    // Check if the user trying to delete the assessment is the owner
    if (userAssessment.user.toString() !== req.user.id) {
      return next(new CustomError(stringConstants.unauthorized, 403));
    }

    // Delete the userAssessment
    await UserAssessment.findByIdAndDelete(userAssessmentId);

    res.status(200).json({
      success: true,
      message: "User assessment deleted successfully",
      data: userAssessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.getUserAssessmentById = async (req, res, next) => {
  const userAssessmentId = req.params.id;

  try {
    const userAssessment = await UserAssessment.findById(userAssessmentId);

    if (!userAssessment) {
      return next(new CustomError(stringConstants.userAssessmentNotFound, 404));
    }

    // Check if the user trying to get the assessment is the owner
    if (userAssessment.user.toString() !== req.user.id) {
      return next(new CustomError(stringConstants.unauthorized, 403));
    }

    res.status(200).json({
      success: true,
      data: userAssessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.getAllUserAssessments = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const userAssessments = await UserAssessment.find({ user: userId });

    res.status(200).json(userAssessments);
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};
