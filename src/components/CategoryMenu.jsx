import React from 'react';
import { Menu } from 'antd';

const categories = [
  'All', 'Abstract', 'Animals', 'Anime', 'Fantasy', 'Games', 
  'Landscapes', 'Movies', 'Nature', 'Space'
];

const CategoryMenu = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ width: '100%' }}>
      {categories.map((category, index) => (
        <Menu.Item key={index + 1}>{category}</Menu.Item>
      ))}
    </Menu>
  );
};

export default CategoryMenu;