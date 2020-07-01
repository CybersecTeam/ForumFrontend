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
    forumList.forEach((forumInfo, index) => {
      renderedForumList.push(
        <ForumBox forumInfo={forumInfo} index={index}></ForumBox>
      );
    });
    return renderedForumList;
  };

  const renderedForumList = renderForumList();
  return (
    <div className="forumList">
      <div className="title">
        <div className="title_item">Forums</div>
        <div className="title_item">Dani button</div>
      </div>
      <div className="description">Select a forum</div>
      {renderedForumList}
    </div>
  );
}

export default ForumList;
