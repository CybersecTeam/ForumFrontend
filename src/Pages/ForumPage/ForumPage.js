import React from "react";
import "../pagesStyles.css";
import ForumList from "../../Components/Forum/ForumList";
import ForumDetail from "Components/Forum/ForumDetail";
function ForumPage() {
  return (
    <div className="forum_page">
      <ForumList></ForumList>
      <ForumDetail></ForumDetail>
    </div>
  );
}

export default ForumPage;
