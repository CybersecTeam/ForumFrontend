import { all } from "redux-saga/effects";
import { forumSagas } from "./ForumSagas";
export default function* rootSaga() {
  yield all([...forumSagas]);
}
