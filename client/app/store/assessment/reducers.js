import {
  CREATE_ASSESSMENT,
  CREATE_ASSESSMENT_SUCCESS,
  CREATE_ASSESSMENT_FAILURE,
  CREATE_ASSESSMENT_INIT,
} from "./actionTypes";

const initialState = {
  assessmentData: null,
  createSuccess: false,
  createFailure: false,
  createError: null,
};

const assessmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ASSESSMENT:
      return {
        ...state,
        assessmentData: null,
        createSuccess: false,
        createFailure: false,
      };
    case CREATE_ASSESSMENT_SUCCESS:
      return {
        ...state,
        assessmentData: action.payload,
        createSuccess: true,
        createFailure: false,
      };
    case CREATE_ASSESSMENT_FAILURE:
      return {
        ...state,
        createError: action.payload,
        createSuccess: false,
        createFailure: true,
      };
    case CREATE_ASSESSMENT_INIT:
      return {
        ...state,
        createError: null,
        createSuccess: false,
        createFailure: false,
        assessmentData: null,
      };
    default:
      return state;
  }
};

export default assessmentReducer;
