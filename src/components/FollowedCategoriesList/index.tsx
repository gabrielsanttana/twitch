import React from 'react';
import {Text} from 'react-native';
import data from '../../data';
import FollowedCategoryCard from './FollowedCategoryCard';
import {Container} from './styles';

const FollowedCategoriesList: React.FC = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <FollowedCategoryCard item={item} key={`${item.name}-${index}`} />
      ))}
    </Container>
  );
};

export default FollowedCategoriesList;
