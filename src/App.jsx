// import React from 'react';
// import { Layout, Menu, Button, Input, Card, Row, Col, Typography } from 'antd';
// import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// import './App.css';

// const { Header, Content, Footer } = Layout;
// const { Title, Text } = Typography;

// function App() {
//   const categories = [
//     'All',
//     'Abstract',
//     'Animals',
//     'Anime',
//     'Fantasy',
//     'Games',
//     'Landscapes',
//     'Movies',
//     'Nature',
//     'Space'
//   ];

//   const artworks = [
//     {
//       title: 'Digital Art 1',
//       artist: 'Artist Name',
//       price: '$29.99',
//       image: '/images/artworks1.jpg'
//     },
//     {
//       title: 'Digital Art 2',
//       artist: 'Artist Name',
//       price: '$39.99',
//       image: '/images/artworks2.jpg'
//     },
//     {
//       title: 'Digital Art 3',
//       artist: 'Artist Name',
//       price: '$24.99',
//       image: '/images/artworks3.jpg'
//     },
//     {
//       title: 'Digital Art 4',
//       artist: 'Artist Name',
//       price: '$34.99',
//       image: '/images/artworks4.jpg'
//     },
//     {
//       title: 'Digital Art 5',
//       artist: 'Artist Name',
//       price: '$44.99',
//       image: '/images/artworks5.jpg'
//     },
//     {
//       title: 'Digital Art 6',
//       artist: 'Artist Name',
//       price: '$19.99',
//       image: '/images/artworks6.jpg'
//     }, 
//     {
//       title: 'Digital Art 7',
//       artist: 'Artist Name',
//       price: '$49.99',
//       image: '/images/artworks7.jpg'
//     },
//     {
//       title: 'Digital Art 8',
//       artist: 'Artist Name',
//       price: '$100.00',
//       image: '/images/artworks8.jpg'
//     }
//   ];

//   return (
//     <Layout className="layout">
//       <Header style={{ background: '#fff', width: '100%', marginBottom: '50px', position: 'static' }}>
//         <div className="header-content">
//           <div className="logo">
//             <Title level={3} style={{ margin: 0 }}>VoovArt</Title>
//           </div>
//           <Input
//             prefix={<SearchOutlined />}
//             placeholder="Search artworks..."
//             className="search-input"
//           />
//           <div className="header-actions">
//             <Button type="text" icon={<UserOutlined />}>Login</Button>
//             <Button type="text" icon={<ShoppingCartOutlined />}>Cart</Button>
//           </div>
//         </div>
//         <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ width: '100%' }}>
//           {categories.map((category, index) => (
//             <Menu.Item key={index + 1}>{category}</Menu.Item>
//           ))}
//         </Menu>
//       </Header>

//       <Content style={{ width: '100%', marginTop: '75px' }}>
//         <div className="featured-section">
//           <Row gutter={[24, 24]}>
//             {artworks.map((artwork, index) => (
//               <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
//                 <Card
//                   hoverable
//                   cover={<img alt={artwork.title} src={artwork.image} />}
//                   className="artwork-card"
//                 >
//                   <Card.Meta
//                     title={artwork.title}
//                     description={
//                       <>
//                         <Text>{artwork.artist}</Text>
//                         <br />
//                         <Text strong>{artwork.price}</Text>
//                       </>
//                     }
//                   />
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </Content>

//       <Footer style={{ textAlign: 'center' }}>
//         ©{new Date().getFullYear()} Created by Data Science Team
//       </Footer>
//     </Layout>
//   );

// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;