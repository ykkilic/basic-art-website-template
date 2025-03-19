import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import CategoryMenu from '../components/CategoryMenu';
import ArtworkList from '../components/ArtworkList';
import AppFooter from '../components/Footer';

const { Content } = Layout;

const MainPage = () => {
  return (
    <Layout className="layout">
      <AppHeader />
      <CategoryMenu />
      <Content style={{ width: '100%' }}>
        <div className="featured-section">
          <ArtworkList />
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default MainPage;
