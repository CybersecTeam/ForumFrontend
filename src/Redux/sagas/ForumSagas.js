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
function* getForumDetailSaga(action) {
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
      forumDetail: response.data.forums,
    });
  } catch (error) {}
  yield put({
    type: "SET_LOADING",
    loadingName: "forumDetailLoading",
    loadingValue: false,
  });
}

function* createForumSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "forumListLoading",
    loadingValue: true,
  });
  try {
    console.log("action", action);
    const response = yield call(ApiRequests.createForum, action);
    yield delay(300);
    console.log("create response", response);
    yield put({
      type: "GET_FORUM_LIST_SAGA",
    });

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

function* createCommentSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "forumListLoading",
    loadingValue: true,
  });
  try {
    console.log("action", action);
    const response = yield call(ApiRequests.createComment, action);
    yield delay(300);
    console.log("create comment resp", response);
    yield put({
      type: "GET_FORUM_DETAIL_SAGA",
      id: action.comment.forum,
    });
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

export const forumSagas = [
  takeLatest("GET_FORUM_LIST_SAGA", getForumListSaga),
  takeLatest("GET_FORUM_DETAIL_SAGA", getForumDetailSaga),
  takeLatest("CREATE_FORUM_SAGA", createForumSaga),
  takeLatest("ADD_COMMENT_SAGA", createCommentSaga),
];
