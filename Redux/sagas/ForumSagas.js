import ApiServices from "Api/services";
import ApiRequests from "Api/requests";
import { put, takeLatest, call } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { toast } from "react-toastify";
import Cookie from "js-cookie";

// GET ADMIN SERVICES
// params: page, limit, searchedText, sortBy, sortOrder, searchedLanguage
function* getServicesSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceListLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiServices.getServices, action);
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
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
  }
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceListLoading",
    loadingValue: false,
  });
}
// Sales list
function* getSalesServicesSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "salesTableLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiServices.getSalesServices, action);
    if (response.data.data) {
      // const minPrice =
      //   response.data.data.minPrice !== null ? response.data.data.minPrice : 0;

      yield put({
        type: "SAVE_SERVICE_LIST",
        serviceList: response.data.data.services,
      });
      console.log("services", response.data.data);
      yield put({
        type: "SAVE_SERVICE_MAX_PRICING",
        maximumServicePrice: response.data.data.maxPrice,
      });

      // if (
      //   Cookie.get("maxPrice") < response.data.data.maxPrice ||
      //   !Cookie.get("maxPrice")
      // ) {
      //   Cookie.set("maxPrice", response.data.data.maxPrice);
      // }

      yield delay(300);
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
  }
  yield put({
    type: "SET_LOADING",
    loadingName: "salesTableLoading",
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
    const response = yield call(ApiServices.getService, action);
    yield delay(300);
    yield put({
      type: "SAVE_SERVICE_DETAIL",
      serviceId: action.id,
      serviceDetail: response.data.data.service,
    });
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString(), "error");
    }
  }
  yield put({
    type: "SET_LOADING",
    loadingName: "serviceDetailLoading",
    loadingValue: false,
  });
}

// Create service from admin
function* createServiceSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "createServiceLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiServices.createService, action);
    yield put({
      type: "SET_VALIDATION",
      validationName: "validServiceForm",
      validationValue: true,
    });
    yield delay(300);
    // validServiceForm is a trigger or flag that indicates that the modal form must be closed
    toast.success(response.data.data.message);
    yield put({
      type: "SET_VALIDATION",
      validationName: "validServiceForm",
      validationValue: false,
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
  }
  yield put({
    type: "SET_LOADING",
    loadingName: "createServiceLoading",
    loadingValue: false,
  });
}
// delete user from admin
function* deleteServiceSaga(action) {
  try {
    const response = yield call(ApiServices.deleteService, action);
    toast.success(response.data.data.message);
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
  }
}
// update service from admin, returns updated service data
function* updateServiceSaga(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "editServiceLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiServices.updateService, action);
    if (response.data.data.service !== undefined) {
      yield put({
        type: "SAVE_UPDATED_SERVICE",
        updatedService: response.data.data.service,
      });
    }
    if (response.data.data.request !== undefined) {
      yield put({
        type: "ACCEPT_UPDATE_SERVICE_REQUEST",
        id: response.data.data.request,
      });
      yield put({
        type: "GET_SERVICES_SAGA",
        page: 1,
        limit: 30,
        searchedText: [],
        selectedLanguage: "EN-US",
      });
    }

    // validServiceForm is a trigger or flag that indicates that the modal form must be closed
    yield put({
      type: "SET_VALIDATION",
      validationName: "validServiceForm",
      validationValue: true,
    });
    yield delay(300);
    toast.success(response.data.data.message);
    yield put({
      type: "SET_VALIDATION",
      validationName: "validServiceForm",
      validationValue: false,
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
  }
  yield put({
    type: "SET_LOADING",
    loadingName: "editServiceLoading",
    loadingValue: false,
  });
}

// acording to item type (service or package) and according to method (create, update or delete)
function* acceptUpdateServiceRequest(action) {
  try {
    const response = yield call(ApiRequests.acceptUpdateService, action);
    toast.success(response.data.message);
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
  }
}
// get SOW report
function* getSOWSaga(action) {
  try {
    const response = yield call(ApiServices.sendPetitionSOW, action);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    let documentName = "Service" + action.cpqCode + ".docx";
    link.setAttribute("download", documentName);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
  }
}

// Admin report
function* getServicesReport(action) {
  yield put({
    type: "SET_LOADING",
    loadingName: "reportsLoading",
    loadingValue: true,
  });
  try {
    const response = yield call(ApiServices.getServicesReport, action);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let documentName = "Service" + date + ".xlsx";
    link.setAttribute("download", documentName);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
  }
  yield put({
    type: "SET_LOADING",
    loadingName: "reportsLoading",
    loadingValue: false,
  });
}

// get SOW report
function* getWBSSaga(action) {
  try {
    const response = yield call(ApiServices.sendPetitionWBS, action);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    let documentName = "Service" + action.cpqCode + ".xlsx";
    link.setAttribute("download", documentName);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.errors.join();
      if (errorMessage !== "Invalid token") {
        toast.warn(errorMessage);
      }
    } else {
      toast.error(error.toString());
    }
  }
}

export const servicesSagas = [
  takeLatest("GET_SERVICES_SAGA", getServicesSaga),
  takeLatest("GET_SERVICE_DETAIL_SAGA", getServiceDetail),
  takeLatest("CREATE_SERVICE_SAGA", createServiceSaga),
  takeLatest("DELETE_SERVICE_SAGA", deleteServiceSaga),
  takeLatest("UPDATE_SERVICE_SAGA", updateServiceSaga),
  takeLatest("ACCEPT_UPDATE_SERVICE_REQUEST", acceptUpdateServiceRequest),
  takeLatest("GET_SALES_SERVICES_SAGA", getSalesServicesSaga),
  takeLatest("GET_SOW", getSOWSaga),
  takeLatest("GET_WBS", getWBSSaga),
  takeLatest("GET_SERVICES_REPORT", getServicesReport),
];
