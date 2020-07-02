import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Forum.css";
import ForumBox from "./ForumBox";
import Button from "antd/lib/button/button";
import ForumModal from "Components/Forum/ForumModal";
function ForumList() {
  const [showLogin, togglLoginCard] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
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

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleOk = () => {
    setShowModal(false);
    console.log({ title: title, body: body });
  };

  const renderedForumList = renderForumList();
  return (
    <div className="forumList">
      <ForumModal
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyValue={body}
        titleValue={title}
        bodyHandler={setBody}
        titleHandler={setTitle}
      />
      <div className="title">
        <div className="title_item">Forums</div>
        <div className="title_item">
          <Button type="primary" onClick={handleModal}>
            Crear nuevo post
          </Button>
        </div>
      </div>
      <div className="description">Select a forum</div>
      {renderedForumList}
    </div>
  );
}

export default ForumList;
