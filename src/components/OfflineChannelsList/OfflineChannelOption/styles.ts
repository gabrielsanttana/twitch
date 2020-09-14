import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 14px;
  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${colors.tag};
  border-radius: 24px;
  margin-right: 10px;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const Name = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 16px;
`;

export const Description = styled.Text`
  margin-top: 1px;
  color: ${colors.gray};
  font-size: 13px;
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${colors.black};
  opacity: 0.85;
`;
