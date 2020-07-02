import { initialState } from "../initialState";

const systemReducer = (state = initialState.system, action) => {
  switch (action.type) {
    case "SET_LOADING":
      let loadingState = { ...state.loadings };
      loadingState[action.loadingName] = action.loadingValue;
      return {
        ...state,
        loadings: loadingState,
      };
    case "SAVE_USERNAME_REDUCER":
      return {
        ...state,
        nickname: action.nickname,
      };
    default:
      return state;
  }
};

export default systemReducer;
