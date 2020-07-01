import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../pagesStyles.css";
import ForumList from "../../Components/Forum/ForumList";
import ForumDetail from "Components/Forum/ForumDetail";

function ForumPage() {
  const dispatch = useDispatch();

  const getForumListSaga = () => {
    dispatch({ type: "GET_FORUM_LIST_SAGA" });
  };
  const forumList = useSelector((state) => state.forum.forumList);
  const [selectedForumId, setSelectedForumId] = useState(true);

  useEffect(() => {
    getForumListSaga();
  }, []);

  return (
    <div className="forum_page">
      <ForumList
        forumList={forumList}
        setSelectedForumId={setSelectedForumId}
      ></ForumList>
      <ForumDetail selectedForumId={selectedForumId}></ForumDetail>
    </div>
  );
}

export default ForumPage;
