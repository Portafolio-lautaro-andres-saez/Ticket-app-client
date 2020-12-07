import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";
import React from "react";

const { Title, Text } = Typography;

export default function Desktop() {
  const out = () => {};

  const nextTicket = () => {};

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Lautaro</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">5</Text>
        </Col>
        <Col span={4}>
          <Button shape="round" type="danger" onClick={out}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
              <RightOutlined />
              Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
}
