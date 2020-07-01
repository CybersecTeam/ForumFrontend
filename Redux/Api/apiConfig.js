import axios from "axios";
import CookieService from "./cookieService";
import { history } from "Helpers/History";
import { toast } from "react-toastify";

const cookieService = CookieService.getService();

const instance = axios.create({
  headers: {
    common: {},
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = cookieService.getAccessToken();
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      cookieService.clearToken();
      history.push("/");
      toast.warning("Your session has expired");
    }
    return Promise.reject(error);
  }
);

export { instance };

export const ROOT_URL = process.env.REACT_APP_API_URL;
