import React, { useState } from "react";
import Button from "antd/lib/button/button";
import Typography from "antd/lib/typography/Typography";
import UsernameModal from "./UsernameModal";
import "./navbar.css";

function Navbar() {
  const [username, setUsername] = useState("Set Username");
  const [showModal, setShowModal] = useState(false);
  const handleOk = () => {
    setShowModal(false);
    console.log(username);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="navbar">
      <Typography className="navbar-title">Forumonymous</Typography>
      <Button onClick={handleModal}>{username}</Button>
      <UsernameModal
        usernameValue={username}
        usernameHandler={setUsername}
        onOk={handleOk}
        onCancel={handleCancel}
        visible={showModal}
      />
    </div>
  );
}

export default Navbar;
