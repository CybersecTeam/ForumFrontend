import React from "react";
import Typography from "antd/lib/typography/Typography";
import "./navbar.css";
import hacker from "Assets/Images/hacker.png";
function Navbar() {
  return (
    <div className="navbar">
      <img
        src={hacker}
        width="auto"
        height="80px"
        alt="forymonimous logo"
      ></img>
      <Typography className="navbar-title">Forumonymous</Typography>
    </div>
  );
}

export default Navbar;
