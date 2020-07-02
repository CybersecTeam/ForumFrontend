import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../pagesStyles.css";
import ForumList from "../../Components/Forum/ForumList";
import ForumDetail from "Components/Forum/ForumDetail";
import UsernameModal from "Components/Modals/UsernameModal";

function ForumPage() {
  const [selectedForumId, setSelectedForumId] = useState("");
  const nickname = useSelector((state) => state.system.nickname);
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  console.log("selectedForumId", selectedForumId);
  const dispatch = useDispatch();

  const getForumListSaga = () => {
    dispatch({ type: "GET_FORUM_LIST_SAGA" });
  };

  const addComment = (commentData) => {
    dispatch({ type: "ADD_COMMENT_SAGA", comment: commentData });
  };

  const saveUsernameReducer = (nickname) => {
    dispatch({ type: "SAVE_USERNAME_REDUCER", nickname: nickname });
  };

  const createForumSaga = (forum) => {
    console.log("createForumSaga", forum);
    dispatch({ type: "CREATE_FORUM_SAGA", forum: forum });
  };
  const selectForum = (id) => {
    setSelectedForumId(id);
    dispatch({ type: "GET_FORUM_DETAIL_SAGA", id: selectedForumId });
  };

  const handleOk = () => {
    setShowModal(false);
    saveUsernameReducer(username);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const forumList = useSelector((state) => state.forum.forumList);

  useEffect(() => {
    getForumListSaga();
    setShowModal(true);
  }, []);

  return (
    <div className="forum_page">
      <UsernameModal
        usernameValue={username}
        usernameHandler={setUsername}
        onOk={handleOk}
        onCancel={handleCancel}
        visible={showModal}
      />
      <ForumList
        forumList={forumList}
        selectedForumId={selectedForumId}
        selectForum={selectForum}
        createForumSaga={createForumSaga}
        nickname={nickname}
      ></ForumList>
      <ForumDetail
        selectedForumId={selectedForumId}
        addComment={addComment}
        nickname={nickname}
      ></ForumDetail>
    </div>
  );
}

export default ForumPage;
