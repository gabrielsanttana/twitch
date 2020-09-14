import React from 'react';
import {Text} from 'react-native';
import LiveChannelOption from './LiveChannelOption';
import {Container} from './styles';

const LiveChannelsList: React.FC = () => {
  return (
    <Container>
      <LiveChannelOption />
      <LiveChannelOption />
      <LiveChannelOption />
      <LiveChannelOption />
      <LiveChannelOption />
    </Container>
  );
};

export default LiveChannelsList;
