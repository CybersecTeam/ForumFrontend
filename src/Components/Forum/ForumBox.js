import React, { useEffect } from "react";
import "./Forum.css";
import { Styles } from "./ForumStyled";

function ForumBox({ forumInfo, index, selectedForumId, selectForum }) {
  return (
    <Styles.ForumBox
      index={index}
      onClick={() => selectForum(forumInfo._id)}
      isSelected={selectedForumId === forumInfo._id}
    >
      {forumInfo.title}
    </Styles.ForumBox>
  );
}

export default ForumBox;
