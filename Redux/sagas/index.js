import { all } from "redux-saga/effects";
import { authSagas } from "./AuthSagas";
import { userSagas } from "./UserSagas";
import { servicesSagas } from "./ForumSagas";
import { packagesSagas } from "./PackagesSagas";
import { requestsSagas } from "./RequestsSagas";
import { systemSagas } from "./SystemSagas";
import { reportsSagas } from "./ReportsSagas";
export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...userSagas,
    ...servicesSagas,
    ...packagesSagas,
    ...requestsSagas,
    ...systemSagas,
    ...reportsSagas,
  ]);
}
