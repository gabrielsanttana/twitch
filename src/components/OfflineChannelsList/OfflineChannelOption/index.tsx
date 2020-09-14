import React from 'react';
import {
  Container,
  Avatar,
  Info,
  Name,
  Description,
  LeftSide,
  RightSide,
  WhiteCircle,
} from './styles';

const OfflineChannelOption: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Avatar />

        <Info>
          <Name>Riot Games</Name>
          <Description>3 new videos</Description>
        </Info>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </Container>
  );
};

export default OfflineChannelOption;
