import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Forum.css";

function ForumDetail({ selectedForumId }) {
  const forumDetail = useSelector(
    (state) => state.forum.forumDetail[selectedForumId]
  );
  console.log("forumDetail", forumDetail, selectedForumId);

  const renderComments = () => {
    const renderedComments = [];
    forumDetail.comments.forEach((comment) => {
      renderedComments.push(
        <div className="comment_box">{comment.content}</div>
      );
    });
    return renderedComments;
  };

  return (
    <div className="forumDetail">
      {forumDetail ? (
        <div className="forumDetail">
          <div className="forum_detail_header">
            <div className="forum_detail_title">
              Este es el titulo de mi foro anonimo
            </div>
            <div className="forum_detail_tags">tags</div>
            <div className="forum_detail_username">Dancing Ferret</div>
            <div className="forum_detail_description">descripcion</div>
          </div>
          <div className="comments">
            <div className="comments_title">Comments</div>
            {renderComments()}
          </div>
        </div>
      ) : (
        <div>No detail</div>
      )}
    </div>
  );
}

export default ForumDetail;
