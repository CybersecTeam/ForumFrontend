import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../pagesStyles.css";
import ForumList from "../../Components/Forum/ForumList";
import ForumDetail from "Components/Forum/ForumDetail";

function ForumPage() {
  const [selectedForumId, setSelectedForumId] = useState("");
  const nickname = useSelector((state) => state.system.nickname);

  console.log("selectedForumId", selectedForumId);
  const dispatch = useDispatch();

  const getForumListSaga = () => {
    dispatch({ type: "GET_FORUM_LIST_SAGA" });
  };

  const createForumSaga = (forum) => {
    console.log("createForumSaga", forum);
    dispatch({ type: "CREATE_FORUM_SAGA", forum: forum });
  };
  const selectForum = (id) => {
    setSelectedForumId(id);
    dispatch({ type: "GET_FORUM_DETAIL_SAGA", id: selectedForumId });
  };

  const forumList = useSelector((state) => state.forum.forumList);

  useEffect(() => {
    getForumListSaga();
  }, []);

  return (
    <div className="forum_page">
      <ForumList
        forumList={forumList}
        selectedForumId={selectedForumId}
        selectForum={selectForum}
        createForumSaga={createForumSaga}
        nickname={nickname}
      ></ForumList>

      <ForumDetail selectedForumId={selectedForumId}></ForumDetail>
    </div>
  );
}

export default ForumPage;
