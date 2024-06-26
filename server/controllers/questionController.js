const Question = require("../models/question");
const CustomError = require("../utilis/customError");
const stringConstants = require("../utilis/strringConstants");

exports.createQuestion = async (req, res, next) => {
  try {
    const {
      topic,
      subTopic,
      difficulty,
      options,
      correctAnswer,
      resource,
      question,
    } = req.body;
    if (!options) {
      return next(new CustomError(stringConstants.noOptions, 400));
    }
    const questionI = await Question.create({
      topic,
      subTopic,
      difficulty,
      options,
      correctAnswer,
      resource,
      question,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Question created successfully",
      data: questionI,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorMessage = Object.values(error.errors)
        .map((err) => err.message)
        .join(", ");
      return next(new CustomError(errorMessage, 400));
    }
    console.error(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.updateQuestion = async (req, res, next) => {
  const questionId = req.params.id;
  const updateData = req.body;

  try {
    const question = await Question.findByIdAndUpdate(questionId, updateData, {
      new: true,
    });
    if (!question) {
      return next(new CustomError(stringConstants.questionNotFound, 404));
    }
    res.status(200).json({
      success: true,
      message: "Question updated successfully",
      data: question,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorMessage = Object.values(error.errors)
        .map((err) => err.message)
        .join(", ");
      return next(new CustomError(errorMessage, 400));
    }
    console.error(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.deleteQuestion = async (req, res, next) => {
  const questionId = req.params.id;

  try {
    const question = await Question.findByIdAndDelete(questionId);
    if (!question) {
      return next(new CustomError(stringConstants.questionNotFound, 404));
    }
    res.status(200).json({
      success: true,
      message: "Question deleted successfully",
      data: question,
    });
  } catch (error) {
    console.error(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.getQuestion = async (req, res, next) => {
  const questionId = req.params.id;

  try {
    const question = await Question.findById(questionId);
    console.log(question);
    if (!question) {
      return next(new CustomError(stringConstants.questionNotFound, 404));
    }
    console.log("ji");
    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error) {
    console.error(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};

exports.getNextQuestion = async (req, res, next) => {
  const { difficulty, topic, subTopic, currentQuestionId } = req.body;
  console.log(currentQuestionId);
  try {
    // Construct a query to find the next question based on the provided parameters
    const query = {
      _id: { $ne: currentQuestionId }, // Exclude the current question
      topic,
      difficulty,
    };

    // Include the subtopic in the query if provided
    if (subTopic) {
      query.subTopic = subTopic;
    }

    const nextQuestion = await Question.findOne(query);

    if (!nextQuestion) {
      return next(new CustomError("Question not found", 404));
    }

    res.status(200).json({
      success: true,
      data: nextQuestion,
    });
  } catch (error) {
    console.error(error);
    next(new CustomError("Internal server error", 500));
  }
};

exports.getAllQuestions = async (req, res, next) => {
  try {
    // Query all questions from the database
    const questions = await Question.find();

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    console.error(error);
    next(new CustomError(stringConstants.serverError, 500));
  }
};
