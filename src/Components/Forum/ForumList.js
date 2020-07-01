import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Forum.css";
import ForumBox from "./ForumBox";
import Button from "antd/lib/button/button";
import ForumModal from "Components/Forum/ForumModal";
import PlusOutlined from "@ant-design/icons";
function ForumList() {
  const [showLogin, togglLoginCard] = useState(true);
  const [showModal, setShowModal] = useState(false);
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

  const renderedForumList = renderForumList();
  return (
    <div className="forumList">
      <ForumModal visible={showModal} />
      <div className="title">
        <div className="title_item">Forums</div>
        <div className="title_item">
          <Button icon={<PlusOutlined />} type="primary" onClick={handleModal}>
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
