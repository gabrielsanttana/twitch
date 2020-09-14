import React from 'react';
import {Text} from 'react-native';
import OfflineChannelOption from './OfflineChannelOption';
import {Container} from './styles';

const OfflineChannelsList: React.FC = () => {
  return (
    <Container>
      <OfflineChannelOption />
      <OfflineChannelOption />
      <OfflineChannelOption />
      <OfflineChannelOption />
      <OfflineChannelOption />
    </Container>
  );
};

export default OfflineChannelsList;
