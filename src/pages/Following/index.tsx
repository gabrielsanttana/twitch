import React, {useMemo} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../components/Header';
import {Container} from './styles';

interface Component {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  useMemo(() => {
    const components: Component[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Text />,
        isTitle: true,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Text />,
        isTitle: true,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Text />,
        isTitle: false,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <View />,
        isTitle: false,
      },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <View />,
        isTitle: false,
      },
    ];
  }, []);

  return (
    <Container>
      <Header />

      <FlatList 

      />
    </Container>
  );
};

export default Following;
