const User = require("../models/user");

const CustomError = require("../utilis/customError");
const stringConstants = require("../utilis/strringConstants");
const cookieToken = require("../utilis/cookieToken");

exports.signup = async (req, res, next) => {
  let { username, email, password } = req.body;

  if (!email) {
    return next(new CustomError(stringConstants.noEmail, 400));
  }
  if (!username) {
    username = email;
  }
  if (!password) {
    return next(new CustomError(stringConstants.noPassword, 400));
  }

  const fetchedUsername = await User.findOne({ username });
  if (fetchedUsername) {
    return next(new CustomError(stringConstants.usernameExsist, 400));
  }
  const fetchedEmail = await User.findOne({ email });
  if (fetchedEmail) {
    return next(new CustomError(stringConstants.emailExsist, 400));
  }

  const user = await User.create({
    username,
    email,
    password,
  });
  console.log(user);

  cookieToken(user, res);
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    return next(new CustomError(stringConstants.noUsername, 400));
  }
  if (!password) {
    return next(new CustomError(stringConstants.noPassword, 400));
  }

  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(new CustomError(stringConstants.noUser, 400));
  }
  const isPasswordCorrect = await user.isValidatedPassword(password);

  if (!isPasswordCorrect) {
    return next(new CustomError(stringConstants.incorrectPassword, 400));
  }

  cookieToken(user, res);
};

exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(0),
    httpOnly: true,
  });
  console.log("hi");
  res.status(204).json({
    success: true,
    message: "Logout succesfull",
  });
};
