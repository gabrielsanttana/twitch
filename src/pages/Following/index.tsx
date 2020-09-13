import React, {Component, useMemo} from 'react';
import Header from '../../components/Header';
import {Container} from './styles';
import {View, FlatList} from 'react-native';
import Heading from '../../components/Heading';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const {components, componentsIndices} = useMemo(() => {
    const components: Item[] = [
      {
        key: 'FOLLOWING',
        render: () => <Heading>Following</Heading>,
        isTitle: true,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'FOLLOWED_CATEGORIES_LIST',
        render: () => <View />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'CONTINUE_WATCHING_LIST',
        render: () => <View />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'LIVE_CHANNELS_LIST',
        render: () => <View />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      {
        key: 'OFFLINE_CHANNELS_LIST',
        render: () => <View />,
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

      <FlatList<Item>
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
