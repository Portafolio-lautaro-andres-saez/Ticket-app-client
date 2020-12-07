import React from 'react'

import { Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function MenuLeft() {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to='/ingresar'>
                    Ingresar
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to='/cola'>
                    Cola de tickets
                </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to='/crear'>
                    Crear tickets
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default MenuLeft
