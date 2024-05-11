import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import {
  CREATE_USER_ASSESSMENT,
  CREATE_USER_ASSESSMENT_SUCCESS,
  CREATE_USER_ASSESSMENT_FAILURE,
  GET_NEXT_QUESTION,
  GET_NEXT_QUESTION_SUCCESS,
  GET_NEXT_QUESTION_FAILURE,
} from "./actionTypes";
import {
  createUserAssessmentSuccess,
  createUserAssessmentFailure,
  getNextQuestionSuccess,
  getNextQuestionFailure,
} from "./actions";
import { postData } from "@/utils/Api";

function* createUserAssessmentSaga(action) {
  const payload = action.payload;
  console.log(payload);
  try {
    const response = yield call(postData, "createUserAssessment", payload);
    if (response !== undefined) {
      yield put(createUserAssessmentSuccess(response));
    } else {
      yield put(createUserAssessmentFailure(response));
    }
  } catch (err) {
    yield put(createUserAssessmentFailure(err));
  }
}
function* getNextQuestionSaga(action) {
  const payload = action.payload;
  console.log(payload);
  try {
    const response = yield call(postData, "getNextQuestion", payload);
    if (response !== undefined) {
      yield put(getNextQuestionSuccess(response));
    } else {
      yield put(getNextQuestionFailure(response));
    }
  } catch (err) {
    yield put(getNextQuestionFailure(err));
  }
}

export function* watchCreateUserAssessment() {
  yield takeEvery(CREATE_USER_ASSESSMENT, createUserAssessmentSaga);
}
export function* watchGetNextQuestion() {
  yield takeEvery(GET_NEXT_QUESTION, getNextQuestionSaga);
}

function* userAssessmentSaga() {
  yield all([fork(watchCreateUserAssessment), fork(watchGetNextQuestion)]);
}

export default userAssessmentSaga;
