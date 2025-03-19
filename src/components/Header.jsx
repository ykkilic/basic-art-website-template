import React from 'react';
import { Layout, Input, Button, Typography } from 'antd';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../App.css';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header style={{ background: '#D3DAEB', width: '100%', position: 'static', paddingTop: '10px' }}>
      <div className="header-content">
        <div>
          <Title level={3} style={{ margin: 0 }}><a className='header-logo-link' href="/">Logo</a></Title>
        </div>
        <Input prefix={<SearchOutlined />} placeholder="Search artworks..." className="search-input" />
        <div className="header-actions">
          <Button type="text" icon={<UserOutlined />}>Login</Button>
          <Button type="text" icon={<ShoppingCartOutlined />}>Cart</Button>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;