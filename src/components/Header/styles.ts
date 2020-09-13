import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
`;

export const Avatar = styled.View`
  background-color: ${colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const OnlineStatus = styled.View`
  background-color: ${colors.green};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 2px solid ${colors.primary};
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
