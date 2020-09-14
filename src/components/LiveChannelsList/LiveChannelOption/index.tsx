import React from 'react';
import {
  Container,
  ThumbnailImage,
  Info,
  Header,
  Avatar,
  Name,
  Description,
  Genre,
  TagRow,
  TagView,
  TagText,
} from './styles';
import liveChannelThumbnail from '../../../images/stream_thumbnail.jpg';

const LiveChannelOption: React.FC = () => {
  return (
    <Container>
      <ThumbnailImage source={liveChannelThumbnail} />

      <Info>
        <Header>
          <Avatar />
          <Name numberOfLines={1}>Rocketseat</Name>
        </Header>
        <Description numberOfLines={1}>Live coding</Description>
        <Genre>Science & Technology</Genre>
        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </Info>
    </Container>
  );
};

export default LiveChannelOption;
