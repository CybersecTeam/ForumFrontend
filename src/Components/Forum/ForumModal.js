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
          <Input />
        </Form.Item>
        <Form.Item label="Body">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};
