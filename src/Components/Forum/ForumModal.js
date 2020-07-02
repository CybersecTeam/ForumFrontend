import React from "react";
import { Modal, Form, Input } from "antd";
export default (props) => {
  return (
    <Modal {...props}>
      <Form>
        <Form.Item label="Title">
          <Input
            value={props.titleValue}
            onChange={(e) => props.titleHandler(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Body">
          <Input.TextArea
            value={props.bodyValue}
            onChange={(e) => props.bodyHandler(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
