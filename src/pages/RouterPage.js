import React from 'react'

import { Layout } from 'antd';

import Routes from '../routes/Routes';
import MenuLeft from '../components/RouterPage/MenuLeft';

const { Sider, Content } = Layout;

export default function RouterPage() {
    return (
        <Layout style={{
            height: '100vh'
        }} >
            <Sider
                collapsedWidth='0'
                breakpoint='md'
            >
                <MenuLeft />
            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                >
                    <Routes />
                </Content>
            </Layout>
        </Layout>
    )
}
