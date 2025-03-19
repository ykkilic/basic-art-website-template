import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Button, Card, Select, InputNumber, Divider } from 'antd';
import { ShoppingCartOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import CategoryMenu from '../components/CategoryMenu';

const { Title, Text } = Typography;

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    id,
    title: "Kanvas Modern Duvar Tablosu 3'lü Canvas Tablo Seti – VOOV4320",
    price: { old: "₺1.650,00", new: "₺1.450,00" },
    images: [
      "/images/artworks1.jpg",
      "/images/artworks2.jpg",
      "/images/artworks3.jpg"
    ],
    sizes: ["50x35", "70x50"],
    phone: "0532 617 8668",
    deliveryDate: "Per, Mar 20 - Cum, Mar 21"
  };

  // Seçilen ana resmi saklamak için state
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <Layout className="layout">
      <AppHeader />
      <CategoryMenu />
      <div className="product-details-container" style={{ marginTop: "24px", marginLeft: "50px", marginRight: "50px" }}>
        <Row gutter={[32, 32]}>
          {/* Sol Bölüm: Ürün Görselleri */}
          <Col xs={24} md={12}>
                <Card   cover={
                                <img
                                src={selectedImage}
                                alt={product.title}
                                className="product-main-image"
                                style={{ objectFit: "fill", maxHeight: "600px" }}
                                />
                            } 
                />
                <Row gutter={8} className="product-thumbnails">
                {product.images.map((img, index) => (
                    <Col key={index} span={4}>  {/* span={6} yerine span={4} yaptık */}
                    <img 
                        src={img} 
                        alt={`Thumbnail ${index}`} 
                        className="thumbnail-img" 
                        onClick={() => setSelectedImage(img)}
                        style={{ cursor: "pointer", border: selectedImage === img ? "2px solid blue" : "none" }}
                    />
                    </Col>
                ))}
                </Row>
            </Col>

          {/* Sağ Bölüm: Ürün Bilgileri */}
          <Col xs={24} md={12}>
            <Title level={3}>{product.title}</Title>
            <Text delete>{product.price.old}</Text> <Title level={3} style={{ color: 'red' }}>{product.price.new}</Title>

            <Divider />
            <Text strong>Üçlü Tablo Ölçü (CM)</Text>
            <div>
              <Select defaultValue={product.sizes[0]} style={{ width: 120, marginTop: 8 }}>
                {product.sizes.map(size => (
                  <Select.Option key={size} value={size}>{size}</Select.Option>
                ))}
              </Select>
            </div>

            <Divider />
            <Text strong>Adet Seç</Text>
            <InputNumber min={1} max={10} defaultValue={1} style={{ marginLeft: 8 }} />

            <Divider />
            <Button type="primary" icon={<ShoppingCartOutlined />} size="large">SEPETE EKLE</Button>
            <Button type="danger" size="large" style={{ marginLeft: 10 }}>ŞİMDİ AL</Button>

            <Divider />
            <Text strong>Tahmini Teslim Tarihi:</Text> <Text>{product.deliveryDate}</Text>

            <Divider />
            <Button icon={<WhatsAppOutlined />} type="default" size="large">
              WhatsApp Destek: {product.phone}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Divider />
            <Title level={4}>Что такое Lorem Ipsum?</Title>
            <Text>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </Text>
          </Col>
        </Row>
      </div>
      <AppFooter />
    </Layout>
  );
};

export default ProductDetails;