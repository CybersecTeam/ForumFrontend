import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Forum.css";

function ForumDetail() {
  return (
    <div className="forumDetail">
      <div className="forum_detail_header">
        <div className="forum_detail_title">
          Este es el titulo de mi foro anonimo
        </div>
        <div className="forum_detail_tags">tags</div>
        <div className="forum_detail_username">Dancing Ferret</div>
        <div className="forum_detail_description">descripcion</div>
      </div>
      <div className="comments"></div>
    </div>
  );
}

export default ForumDetail;
