import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Forum.css";
import ForumBox from "./ForumBox";
function ForumList() {
  const [showLogin, togglLoginCard] = useState(true);

  const forumList = useSelector((state) => state.forum.forumList);
  console.log("forumList", forumList);

  const renderForumList = () => {
    const renderedForumList = [];
    forumList.forEach((forumInfo) => {
      renderedForumList.push(<ForumBox forumInfo={forumInfo}></ForumBox>);
    });
    return renderedForumList;
  };

  const renderedForumList = renderForumList();
  return <div className="forumList">{renderedForumList}</div>;
}

export default ForumList;
