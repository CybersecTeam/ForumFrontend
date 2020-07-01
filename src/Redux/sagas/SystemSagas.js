import ApiSystem from "Api/system";
import { put, takeLatest, call } from "redux-saga/effects";
import { toast } from "react-toastify";

// GET TAGS and languages. We show these tags and languages as filters in Sales page
function* getFilterTagsSaga(action) {
  try {
    yield put({
      type: "SET_LOADING",
      loadingName: "salesMenuLoading",
      loadingValue: true,
    });
    const response = yield call(ApiSystem.getFilterTags, action);
    yield put({
      type: "SAVE_TAGS",
      tags: response.data.data.tags,
    });
    yield put({
      type: "SAVE_LANGUAGES",
      languages: response.data.data.languages,
    });
    yield put({
      type: "SET_LOADING",
      loadingName: "salesMenuLoading",
      loadingValue: false,
    });
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
    yield put({
      type: "SET_LOADING",
      loadingName: "salesMenuLoading",
      loadingValue: false,
    });
  }
}

export const systemSagas = [
  takeLatest("GET_FILTER_ITEMS_SAGA", getFilterTagsSaga),
];
