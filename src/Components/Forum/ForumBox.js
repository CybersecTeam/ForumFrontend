import React, { useEffect } from "react";
import "./Forum.css";

function ForumBox({ forumInfo }) {
  return <div className="forum_box">{forumInfo.title}</div>;
}

export default ForumBox;
