import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const MainLayout = (props) => {
return (
    <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.activePage]}>
        <Menu.Item key="main"><Link to="/">خانه</Link></Menu.Item>
        <Menu.Item key="blog"><Link to="/blog">بلاگ</Link></Menu.Item>
        {/* <Menu.Item key="contact">تماس با ما</Menu.Item> */}
        <Menu.Item><Link to="/login">ورود</Link></Menu.Item>
      </Menu>
      {/* <div className="logo">Ehsan-Safari</div> */}
    </Header>
    <Content style={{ padding: '0 50px' }} className="text-right">
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
<div className="site-layout-content">{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      @تمام حقوق این سایت محفوظ است
    </Footer>
  </Layout>
    );
}

export default MainLayout;