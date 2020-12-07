import React from "react";

import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";

import { SaveOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Title, Text } = Typography;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

export default function Login() {

  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);
    history.push('/escritorio')
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <React.Fragment
      style={{
        marginTop: "50px",
        marginLeft: "auto",
      }}
    >
      <Title level={2}>
        Ingresar
      </Title>
      <Divider />
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agente"
          name="agentName"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el nombre del agente",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="desktop"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el número de escritorio",
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}
