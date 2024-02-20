import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
function* fetchComment() {
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({ type: "COMMENT_FETCH_SUCCEEDED", user: user });
  // } catch (e) {
  //   yield put({ type: "COMMENT_FETCH_FAILED", message: e.message });
  // }
  console.log("saga working");
}
function* commentSaga() {
  yield takeEvery("COMMENT_FETCH_REQUESTED", fetchComment);
}
export default commentSaga;
