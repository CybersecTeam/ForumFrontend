// Application state, it's updated by redux

export const initialState = {
  system: {
    nickname: "Anonymous",
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
        _id: "foro3id",
        title: "title2",
        body: "BODY",
        creator: "nickname",
        dateCreated: "01/01/1998",
      },
    ],
    forumDetail: {},
  },
  error: "",
};
