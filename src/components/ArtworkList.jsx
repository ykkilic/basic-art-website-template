import React from 'react';
import { Row, Col } from 'antd';
import ArtworkCard from './ArtworkCard';

// Sanat eserleri verilerini tanımlıyoruz (bu veri sadece burada olmalı)
const artworks = [
  { title: 'Digital Art 1', artist: 'Artist Name', price: '$29.99', image: '/images/artworks1.jpg' },
  { title: 'Digital Art 2', artist: 'Artist Name', price: '$39.99', image: '/images/artworks2.jpg' },
  { title: 'Digital Art 3', artist: 'Artist Name', price: '$24.99', image: '/images/artworks3.jpg' },
  { title: 'Digital Art 4', artist: 'Artist Name', price: '$34.99', image: '/images/artworks4.jpg' },
  { title: 'Digital Art 5', artist: 'Artist Name', price: '$44.99', image: '/images/artworks5.jpg' },
  { title: 'Digital Art 6', artist: 'Artist Name', price: '$19.99', image: '/images/artworks6.jpg' },
  { title: 'Digital Art 7', artist: 'Artist Name', price: '$49.99', image: '/images/artworks7.jpg' },
  { title: 'Digital Art 8', artist: 'Artist Name', price: '$100.00', image: '/images/artworks8.jpg' }
];

const ArtworkList = () => {
  return (
    <div className="artwork-list-container">
      <Row gutter={[24, 24]}>
        {artworks.map((artwork, index) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
            <ArtworkCard artwork={artwork} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ArtworkList;