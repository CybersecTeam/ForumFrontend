import ApiRequests from "../Api/apiRequests";
import { put, takeLatest, call } from "redux-saga/effects";
import { delay } from "redux-saga/effects";

// GET ADMIN SERVICES
// params: page, limit, searchedText, sortBy, sortOrder, searchedLanguage
function* getServicesSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceListLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiRequests.getServices, action);
    const { services, pages, count } = response.data.data;
    yield put({
      type: "SAVE_SERVICE_LIST",
      serviceList: services,
      count: count,
      pages: pages,
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
function* getServiceDetail(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceDetailLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiRequests.getService, action);
    yield delay(300);
    yield put({
      type: "SAVE_SERVICE_DETAIL",
      serviceId: action.id,
      serviceDetail: response.data.data.service,
    });
  } catch (error) {}
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceDetailLoading",
    loadingValue: false,
  });
}

export const forumSagas = [
  takeLatest("GET_SERVICES_SAGA", getServicesSaga),
  takeLatest("GET_SERVICE_DETAIL_SAGA", getServiceDetail),
];
