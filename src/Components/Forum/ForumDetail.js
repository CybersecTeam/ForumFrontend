import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Forum.css";
import { Empty, Form, Button, Input } from "antd";

function ForumDetail({ selectedForumId, addComment, nickname }) {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment) {
      return;
    }
    addComment({
      creator: nickname,
      forum: selectedForumId,
      comment,
    });
  };

  const forumDetail = useSelector(
    (state) => state.forum.forumDetail[selectedForumId]
  );
  // console.log("forumDetail", forumDetail, selectedForumId);
  const { TextArea } = Input;

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
            <div className="forum_detail_title">{forumDetail.title}</div>
            <div className="forum_detail_username">{forumDetail.creator}</div>
            <div className="forum_detail_description">{forumDetail.body}</div>
          </div>
          <div className="comments">
            <div className="comments_title">Comments</div>
            {renderComments()}
            <div className="create_comment">
              <>
                <Form.Item>
                  <TextArea
                    rows={4}
                    onChange={(e) => {
                      console.log(e);
                      setComment(e.target.value);
                    }}
                    value={comment}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    onClick={() => handleSubmit()}
                    type="primary"
                  >
                    Add Comment
                  </Button>
                </Form.Item>
              </>
            </div>
          </div>
        </div>
      ) : (
        <div className="forumNoDetail">
          <Empty></Empty>
        </div>
      )}
    </div>
  );
}

export default ForumDetail;
