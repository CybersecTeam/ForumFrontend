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
      // forumDetailState[action.forumId] = action.forumDetail;

      const foroid1 = {
        //Esto no va a existir en el redux initialState final
        title: "title",
        body: "BODY",
        comments: [
          {
            content: "comentario 1 content",
            creator: "creator 2",
            dateCreated: "date created",
          },
          {
            content: "comentario 2 content",
            creator: "creator 3",
            dateCreated: "date created",
          },
          {
            content: "comentario 3 content",
            creator: "creator 4",
            dateCreated: "date created",
          },
        ],
        creator: "nickname",
        dateCreated: "01/01/1998",
      };
      forumDetailState["foro1id"] = foroid1;

      return {
        ...state,
        forumDetail: forumDetailState,
      };

    default:
      return state;
  }
};

export default forumReducer;
