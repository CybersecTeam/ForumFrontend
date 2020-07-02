// Application state, it's updated by redux

export const initialState = {
  system: {
    loadings: {},
  },
  forum: {
    forumList: [
      {
        _id: "foro1id",
        title: "title1",
        body: "BODY",
        creator: "nickname",
        dateCreated: "01/01/1998",
      },
      {
        _id: "foro2id",
        title: "title2",
        body: "BODY",
        creator: "nickname",
        dateCreated: "01/01/1998",
      },
      {
        _id: "foro2id",
        title: "title2",
        body: "BODY",
        creator: "nickname",
        dateCreated: "01/01/1998",
      },
    ],
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
      },
    },
  },
  error: "",
};
