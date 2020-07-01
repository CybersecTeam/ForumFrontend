import { ROOT_URL, instance } from "./apiConfig";

export default class ApiUsers {
  static getUsers(action) {
    let url = `${ROOT_URL}/users/`;
    const params = new URLSearchParams();
    if (action.searchedText) {
      const searchArray = action.searchedText;
      searchArray.forEach((searchItem) => {
        params.append("searchedText", searchItem);
      });
    }

    params.append("page", action.page);
    params.append("limit", action.limit);
    if (action.roleFilter !== "All") {
      params.append("roleFilter", action.roleFilter);
    }
    if (action.sortBy) {
      params.append("sortBy", action.sortBy);
      params.append("sortOrder", action.sortOrder);
    }
    const request = instance.get(url, {
      params: params,
    });
    return request;
  }

  static getOwners(action) {
    let url = `${ROOT_URL}/users/`;
    const params = new URLSearchParams();
    params.append("roleFilter", 0);
    params.append("roleFilter", 1);
    params.append("roleFilter", 4);
    const request = instance.get(url, {
      params: params,
    });
    return request;
  }

  //    GET one user request
  static getUser(action) {
    const url = `${ROOT_URL}/users/${action.id}`;
    const request = instance.get(url);
    return request;
  }

  //    POST one user request
  static createUser(action) {
    const url = `${ROOT_URL}/users/create`;
    const request = instance.post(url, action.newUserInfo);
    return request;
  }

  //    PUT one superhero request
  static updateUser(action) {
    const url = `${ROOT_URL}/user/${action.id}`;
    const request = instance.put(url, action.userInfo);
    return request;
  }

  //    DELETE one user request
  static deleteUser(action) {
    const url = `${ROOT_URL}/user/${action.id}`;
    const request = instance.delete(url);
    return request;
  }
}
