import {Platform} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding: ${statusBarHeight + 'px'} 20px 0;
`;
