import {
  CREATE_USER_ASSESSMENT,
  CREATE_USER_ASSESSMENT_SUCCESS,
  CREATE_USER_ASSESSMENT_FAILURE,
  CREATE_USER_ASSESSMENT_INIT,
  GET_NEXT_QUESTION,
  GET_NEXT_QUESTION_SUCCESS,
  GET_NEXT_QUESTION_FAILURE,
  GET_NEXT_QUESTION_INIT,
  TOTAL_USER_ASSESSMENT_INIT,
} from "./actionTypes";

const initialState = {
  userAssessmentData: null,
  createUserAssessmentSuccess: false,
  createUserAssessmentFailure: false,
  createUserAssessmentError: null,
  nextQuestionData: null,
  getNextQuestionSuccess: false,
  getNextQuestionFailure: false,
  getNextQuestionError: null,
};

const userAssessmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_ASSESSMENT:
      return {
        ...state,
        userAssessmentData: null,
        createUserAssessmentSuccess: false,
        createUserAssessmentFailure: false,
      };
    case CREATE_USER_ASSESSMENT_SUCCESS:
      return {
        ...state,
        userAssessmentData: action.payload,
        createUserAssessmentSuccess: true,
        createUserAssessmentFailure: false,
      };
    case CREATE_USER_ASSESSMENT_FAILURE:
      return {
        ...state,
        createUserAssessmentError: action.payload,
        createUserAssessmentSuccess: false,
        createUserAssessmentFailure: true,
      };
    case CREATE_USER_ASSESSMENT_INIT:
      return {
        ...state,
        createUserAssessmentError: null,
        createUserAssessmentSuccess: false,
        createUserAssessmentFailure: false,
        userAssessmentData: null,
      };
    case GET_NEXT_QUESTION:
      return {
        ...state,
        nextQuestionData: null,
        getNextQuestionSuccess: false,
        getNextQuestionFailure: false,
      };
    case GET_NEXT_QUESTION_SUCCESS:
      return {
        ...state,
        nextQuestionData: action.payload,
        getNextQuestionSuccess: true,
        getNextQuestionFailure: false,
      };
    case GET_NEXT_QUESTION_FAILURE:
      return {
        ...state,
        getNextQuestionError: action.payload,
        getNextQuestionSuccess: false,
        getNextQuestionFailure: true,
      };
    case GET_NEXT_QUESTION_INIT:
      return {
        ...state,
        getNextQuestionError: null,
        getNextQuestionSuccess: false,
        getNextQuestionFailure: false,
        nextQuestionData: null,
      };
    case TOTAL_USER_ASSESSMENT_INIT:
      return {
        userAssessmentData: null,
        createUserAssessmentSuccess: false,
        createUserAssessmentFailure: false,
        createUserAssessmentError: null,
        nextQuestionData: null,
        getNextQuestionSuccess: false,
        getNextQuestionFailure: false,
        getNextQuestionError: null,
      };
    default:
      return state;
  }
};

export default userAssessmentReducer;
