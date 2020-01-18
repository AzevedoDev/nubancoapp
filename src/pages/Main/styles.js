import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #333;
  margin-top: 4px;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background-color: #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 14px;
  color: #333;
`;
