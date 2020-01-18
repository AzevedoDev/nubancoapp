import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  background-color: #fff;
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;
export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;
export const NavText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 4px;
  margin-top: 16px;
  border-color: rgba(255, 255, 255, 0.8);
  border-width: ${StyleSheet.hairlineWidth}px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
