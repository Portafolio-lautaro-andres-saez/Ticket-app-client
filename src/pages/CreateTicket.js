import { Row, Col, Typography, Button } from 'antd'
import React from 'react'

import { DownloadOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

export default function CreateTicket() {
    
    const newTicket = () => {

    }

    return (
        <>
            <Row>
                <Col span = { 14 } offset = { 6 } align = 'center'  >
                    <Title level = { 3 } >
                        Presione el botón para un nuevo ticket
                    </Title>

                    <Button 
                        type = 'primary'
                        shape = 'round'
                        icon = { <DownloadOutlined /> }
                        size = 'large'
                        onClick={ newTicket  }
                    >
                        Nuevo Ticket
                    </Button>
                </Col>
            </Row>

            <Row
                style={{ 
                    marginTop: 100
                }}
            >
                <Col span = { 14 } offset = { 6 } align = 'center' >
                    <Text level = { 2 } >
                        Su número es: 
                    </Text>

                    <br />

                    <Text type = 'success' style = {{ fontSize: 55 }}>
                        55
                    </Text>
                </Col>
            </Row>

        </>
    )
}
