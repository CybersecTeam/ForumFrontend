import React, { useSelector, useState } from "react";

import "./Forum.css";

function ForumList() {
  const [showLogin, togglLoginCard] = useState(true);

  const forumList = useSelector((state) => state.forum.forumList);
  console.log("forumList", forumList);
  return <div className="ForumBox">forum box</div>;
}

export default ForumList;
