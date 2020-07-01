import axios from "axios";

const instance = axios.create({
  headers: {
    common: {},
  },
});

export { instance };

export const ROOT_URL = process.env.REACT_APP_API_URL;
