import React, {useMemo} from 'react';
import Header from '../../components/Header';
import {Container} from './styles';
import {View, FlatList} from 'react-native';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import FollowedCategoriesList from '../../components/FollowedCategoriesList';
import LiveChannelsList from '../../components/LiveChannelsList';
import OfflineChannelsList from '../../components/OfflineChannelsList';

interface Component {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const {components, componentsIndices} = useMemo(() => {
    const components: Component[] = [
      {
        key: 'FOLLOWING',
        render: () => <Heading>Following</Heading>,
        isTitle: true,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed categories</Title>,
        isTitle: true,
      },
      {
        key: 'FOLLOWED_CATEGORIES_LIST',
        render: () => <FollowedCategoriesList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live channels</Title>,
        isTitle: true,
      },
      {
        key: 'LIVE_CHANNELS_LIST',
        render: () => <LiveChannelsList />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue watching</Title>,
        isTitle: true,
      },
      {
        key: 'CONTINUE_WATCHING_LIST',
        render: () => <LiveChannelsList />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline channels</Title>,
        isTitle: true,
      },
      {
        key: 'OFFLINE_CHANNELS_LIST',
        render: () => <OfflineChannelsList />,
      },
    ];

    const componentsIndices: number[] = [];

    components.forEach(
      (component, index) => component.isTitle && componentsIndices.push(index),
    );

    return {
      components,
      componentsIndices,
    };
  }, []);

  return (
    <Container>
      <Header />

      <FlatList<Component>
        data={components}
        renderItem={({item}) => item.render()}
        keyExtractor={({key}) => key}
        stickyHeaderIndices={componentsIndices}
        onRefresh={() => {}}
        refreshing={false}
      />
    </Container>
  );
};

export default Following;
