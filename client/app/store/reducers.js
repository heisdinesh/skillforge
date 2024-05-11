import { combineReducers } from "redux";

import authReducer from "./auth/reducers";
import assessmentReducer from "./assessment/reducers";
import userAssessmentReducer from "./userAssessment/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  assessment: assessmentReducer,
  userAssessment: userAssessmentReducer,
});

export default rootReducer;
