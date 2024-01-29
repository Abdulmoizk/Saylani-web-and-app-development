import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignupForm = ({registerUser}) => (
  <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={registerUser}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Full Name"
      name="fullName"
      rules={[
        {
          required: true,
          message: "Please input your Full name!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Signup
      </Button>
    </Form.Item>
  </Form>
);
export default SignupForm;
