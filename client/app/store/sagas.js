import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import assessmentSaga from "./assessment/saga";
import userAssessmentSaga from "./userAssessment/saga";

export default function* rootSaga() {
  yield all([authSaga(), assessmentSaga(), userAssessmentSaga()]);
}
