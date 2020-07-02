import ApiRequests from "../Api/apiRequests";
import { put, takeLatest, call } from "redux-saga/effects";
import { delay } from "redux-saga/effects";

// GET ADMIN SERVICES
// params: page, limit, searchedText, sortBy, sortOrder, searchedLanguage
function* getForumListSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "forumListLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiRequests.getForumList, action);
    const { forums } = response.data;
    yield put({
      type: "SAVE_FORUM_LIST",
      forumList: forums,
    });
    yield delay(300);
    yield put({
      type: "SET_LOADING",
      loadingName: "serviceListLoading",
      loadingValue: false,
    });
  } catch (error) {}
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceListLoading",
    loadingValue: false,
  });
}

// Admin detail: all data of service
function* getForumDetail(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceDetailLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiRequests.getForumDetail, action);
    yield delay(300);
    yield put({
      type: "SAVE_FORUM_DETAIL",
      forumId: action.id,
      forumDetail: response.data.data.forum,
    });
  } catch (error) {}
  yield put({
    type: "SET_LOADING",
    loadingName: "forumDetailLoading",
    loadingValue: false,
  });
}

export const forumSagas = [
  takeLatest("GET_FORUM_LIST_SAGA", getForumListSaga),
  takeLatest("GET_FORUM_DETAIL_SAGA", getForumDetail),
];
