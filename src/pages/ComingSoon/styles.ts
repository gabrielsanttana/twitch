import {Platform} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-top: ${statusBarHeight + 'px'};

  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: roboto_500;
  font-size: 30px;
`;
