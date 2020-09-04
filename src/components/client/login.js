import React from 'react';
import MainLayout from '../Layout/mainLayout';
import { Input,Row,Col,Form,Button } from 'antd';
import { UserOutlined, LoginOutlined } from '@ant-design/icons';

const Login = () => {
    return  (
    <MainLayout activePage="login">
        <h1>صفحه لاگین</h1>
        <Row className="text-center">  
            <Col span={6}>
                <Form>
                   <Input placeholder="نام کاربری" type="text" prefix={<UserOutlined />} />
                   <Input placeholder="رمز عبور" type="password" prefix={<UserOutlined />} />
                   <Button type="primary" icon={<LoginOutlined />}>
                    ورود
                   </Button>
                </Form>
            </Col>
        </Row>
    </MainLayout>);
}
 
export default Login;