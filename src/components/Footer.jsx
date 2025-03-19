import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter className='footer' style={{ marginTop: '40px' }}>
      <Row gutter={[24, 24]} style={{ padding: '0px' }}>
        <Col xs={24} md={8}>
          <h4>Bağlantılar</h4>
          <ul>
            <li><Link href="/">Ana Sayfa</Link></li>
            <li><Link href="#">Eserler</Link></li>
            <li><Link href="#">Sanatçılar</Link></li>
            <li><Link href="#">İletişim</Link></li>
          </ul>
        </Col>
        <Col xs={24} md={8}>
          <h4>Hakkımızda</h4>
          <Text>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..". </Text>
        </Col>
        <Col xs={24} md={8}>
          <h4>İletişim</h4>
          <Text>Email: info@info.com</Text><br />
          <Text>Telefon: +90 555 123 4567</Text>
        </Col>
      </Row>
      <div style={{ marginTop: '20px', borderTop: '1px solid #f0f0f0', paddingTop: '20px', textAlign: 'center' }}>
        <Text>© Created By Data Science Team</Text>
      </div>
    </AntFooter>
  );
};

export default Footer;