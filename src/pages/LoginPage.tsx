import React from 'react'
import Login from '../components/Login'
import { Col, Row } from 'antd'

function LoginPage(props: any) {
    return (
        <Row justify={"center"}>
            <Col xs={22} sm={22} md={12} lg={8} xl={8}>
                <Login></Login>
            </Col>
        </Row>
    )
}

export default LoginPage;

