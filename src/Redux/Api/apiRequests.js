import { ROOT_URL, instance } from "./apiConfig";

export default class ApiRequests {
  // list
  static getForumList(action) {
    let url = `${ROOT_URL}/forum`;
    const request = instance.get(url);
    return request;
  }
  static getForumDetail(action) {
    const url = `${ROOT_URL}/forum/${action.id}`;
    const request = instance.get(url);
    return request;
  }

  static createForum(action) {
    const url = `${ROOT_URL}/forum`;
    const request = instance.post(url, action.forum);
    return request;
  }
}
