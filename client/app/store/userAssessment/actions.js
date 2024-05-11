import {
  CREATE_USER_ASSESSMENT,
  CREATE_USER_ASSESSMENT_SUCCESS,
  CREATE_USER_ASSESSMENT_FAILURE,
  CREATE_USER_ASSESSMENT_INIT,
  GET_NEXT_QUESTION,
  GET_NEXT_QUESTION_SUCCESS,
  GET_NEXT_QUESTION_FAILURE,
  GET_NEXT_QUESTION_INIT,
} from "./actionTypes";

export const createUserAssessment = (data) => ({
  type: CREATE_USER_ASSESSMENT,
  payload: data,
});

export const createUserAssessmentSuccess = (data) => ({
  type: CREATE_USER_ASSESSMENT_SUCCESS,
  payload: data,
});

export const createUserAssessmentFailure = (data) => ({
  type: CREATE_USER_ASSESSMENT_FAILURE,
  payload: data,
});

export const createUserAssessmentInit = (data) => ({
  type: CREATE_USER_ASSESSMENT_INIT,
  payload: data,
});

export const getNextQuestion = (data) => ({
  type: GET_NEXT_QUESTION,
  payload: data,
});

export const getNextQuestionSuccess = (data) => ({
  type: GET_NEXT_QUESTION_SUCCESS,
  payload: data,
});

export const getNextQuestionFailure = (data) => ({
  type: GET_NEXT_QUESTION_FAILURE,
  payload: data,
});

export const getNextQuestionInit = (data) => ({
  type: GET_NEXT_QUESTION_INIT,
  payload: data,
});
