import React from 'react';
import data from '../../../data';
import {
  Container,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

interface FollowedCategoryProps {
  item: typeof data[0];
}

const FollowedCategoryCard: React.FC<FollowedCategoryProps> = ({item}) => {
  return (
    <Container>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </Container>
  );
};

export default FollowedCategoryCard;
