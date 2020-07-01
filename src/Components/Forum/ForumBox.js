import React, { useEffect } from "react";
import "./Forum.css";
import { Styles } from "./ForumStyled";

function ForumBox({ forumInfo, index }) {
  return <Styles.ForumBox index={index}>{forumInfo.title}</Styles.ForumBox>;
}

export default ForumBox;
