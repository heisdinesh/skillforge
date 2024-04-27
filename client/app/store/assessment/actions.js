import {
  CREATE_ASSESSMENT,
  CREATE_ASSESSMENT_SUCCESS,
  CREATE_ASSESSMENT_FAILURE,
  CREATE_ASSESSMENT_INIT,
} from "./actionTypes";

export const createAssessment = (data) => ({
  type: CREATE_ASSESSMENT,
  payload: data,
});

export const createAssessmentSuccess = (data) => ({
  type: CREATE_ASSESSMENT_SUCCESS,
  payload: data,
});

export const createAssessmentFailure = (data) => ({
  type: CREATE_ASSESSMENT_FAILURE,
  payload: data,
});

export const createAssessmentInit = (data) => ({
  type: CREATE_ASSESSMENT_INIT,
  payload: data,
});
