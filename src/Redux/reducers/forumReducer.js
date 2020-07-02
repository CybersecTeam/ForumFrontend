import { initialState } from "../initialState";

/// node: forum
const forumReducer = (state = initialState.forum, action) => {
  switch (action.type) {
    case "SAVE_FORUM_LIST":
      return {
        ...state,
        forumList: action.forumList,
      };

    // save all data of an specific forum and save it into state.forums.forum.[forum._id]
    case "SAVE_FORUM_DETAIL":
      let forumDetailState = { ...state.forumDetail };
      forumDetailState[action.forumId] = action.forumDetail;

      return {
        ...state,
        forumDetail: forumDetailState,
      };

    default:
      return state;
  }
};

export default forumReducer;
