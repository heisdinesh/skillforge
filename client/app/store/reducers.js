import { combineReducers } from "redux";

import authReducer from "./auth/reducers";
import assessmentReducer from "./assessment/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  assessment: assessmentReducer,
});

export default rootReducer;
