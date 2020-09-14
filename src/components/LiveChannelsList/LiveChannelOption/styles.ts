import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  margin-right: 24px;
  margin-bottom: 24px;
`;

export const ThumbnailImage = styled.Image`
  width: 119px;
  height: 66px;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 11px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${colors.tag};
`;

export const Name = styled.Text`
  color: ${colors.black};
  margin-left: 5px;
  font-family: roboto_700;
`;

export const Description = styled.Text`
  color: ${colors.black};
`;

export const Genre = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  margin-right: 5px;
  border-radius: 10px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
`;
