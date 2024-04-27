import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { CREATE_ASSESSMENT } from "./actionTypes";
import { createAssessmentSuccess, createAssessmentFailure } from "./actions";
import { postData } from "@/utils/Api";

function* createAssessmentSaga(action) {
  const payload = action.payload;
  console.log(payload);
  try {
    const response = yield call(postData, "createAssessment", payload);
    if (response != undefined) {
      yield put(createAssessmentSuccess(response));
    } else {
      yield put(createAssessmentFailure(response));
    }
  } catch (err) {
    yield put(createAssessmentFailure(err));
  }
}

export function* watchCreateAssessment() {
  yield takeEvery(CREATE_ASSESSMENT, createAssessmentSaga);
}

function* assessmentSaga() {
  yield all([fork(watchCreateAssessment)]);
}

export default assessmentSaga;
