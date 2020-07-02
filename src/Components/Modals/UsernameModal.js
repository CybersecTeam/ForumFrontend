import React from "react";
import { Modal, Form, Input } from "antd";

export default (props) => {
  return (
    <Modal {...props}>
      <Form>
        <Form.Item label="New Username">
          <Input
            value={props.usernameValue}
            onChange={(e) => props.usernameHandler(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
