const Assessment = require("../models/assessment"); // Import the Assessment model
const mongoose = require("mongoose");
const CustomError = require("../utilis/customError");
const stringConstants = require("../utilis/strringConstants");

exports.createAssessment = async (req, res, next) => {
  const { title, maxQuestions } = req.body;

  try {
    const assessment = await Assessment.create({ title, maxQuestions });

    res.status(201).json({
      success: true,
      message: "Assessment created successfully",
      data: assessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.updateAssessment = async (req, res, next) => {
  const assessmentId = req.params.id;
  const updateData = req.body;

  try {
    const assessment = await Assessment.findByIdAndUpdate(
      assessmentId,
      updateData,
      { new: true }
    );

    if (!assessment) {
      return next(new CustomError(stringConstants.assessmentNotFound, 404));
    }

    res.status(200).json({
      success: true,
      message: "Assessment updated successfully",
      data: assessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.deleteAssessment = async (req, res, next) => {
  const assessmentId = req.params.id;

  try {
    const assessment = await Assessment.findByIdAndDelete(assessmentId);

    if (!assessment) {
      return next(new CustomError(stringConstants.assessmentNotFound, 404));
    }

    res.status(200).json({
      success: true,
      message: "Assessment deleted successfully",
      data: assessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.getAssessmentById = async (req, res, next) => {
  const assessmentId = req.params.id;

  try {
    const assessment = await Assessment.findById(assessmentId);

    if (!assessment) {
      return next(new CustomError(stringConstants.assessmentNotFound, 404));
    }

    res.status(200).json({
      success: true,
      data: assessment,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.getAllAssessments = async (req, res, next) => {
  try {
    const assessments = await Assessment.find();

    res.status(200).json(assessments);
  } catch (error) {
    console.log(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};
