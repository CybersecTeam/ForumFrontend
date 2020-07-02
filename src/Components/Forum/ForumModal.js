import React from "react";
import { Modal, Form, Input } from "antd";
export default (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal {...props}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
