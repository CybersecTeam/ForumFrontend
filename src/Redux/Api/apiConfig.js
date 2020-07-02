import axios from "axios";

const instance = axios.create({
  headers: {
    common: {},
  },
});

export { instance };

export const ROOT_URL =
  "http://m6s3hmeie7hxjdhe4lwpb4jf7xwpjftm6ezbz5mfpiwj4w2fshj35uad.onion:81/api";
