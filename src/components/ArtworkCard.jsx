import React from 'react';
import { Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const ArtworkCard = ({ artwork }) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      cover={<img alt={artwork.title} src={artwork.image} />}
      className="artwork-card"
      onClick={() => navigate(`/product-details`)}
    >
      <Card.Meta
        title={artwork.title}
        description={
          <>
            <Text>{artwork.artist}</Text>
            <br />
            <Text strong>{artwork.price}</Text>
          </>
        }
      />
    </Card>
  );
};

export default ArtworkCard;
