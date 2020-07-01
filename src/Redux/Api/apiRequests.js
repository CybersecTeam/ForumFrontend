import { ROOT_URL, instance } from "./apiConfig";

export default class ApiRequests {
  static getForumList(action) {
    let url = `${ROOT_URL}/forums/`;
    const request = instance.get(url);
    return request;
  }
  static getForumDetail(action) {
    const url = `${ROOT_URL}/forums/${action.id}`;
    const request = instance.get(url);
    return request;
  }

  static createForum(action) {
    const url = `${ROOT_URL}/forums/create`;
    const request = instance.post(url, action.newUserInfo);
    return request;
  }
}
