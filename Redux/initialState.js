// Application state, it's updated by redux

export const initialState = {
  system: {
    loadings: {},
  },
  forum: {
    forumList: [],
    forumDetail: {
      foroid1: {
        //Esto no va a existir en el redux initialState final
        title: "title",
        body: "BODY",
        comments: [
          {
            content: "comentario 1 content",
            creator: "creator 2",
            dateCreated: "date created",
          },
        ],
        creator: "nickname",
        dateCreated: "01/01/1998",
      },
    },
  },
  error: "",
};
