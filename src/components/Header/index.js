import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, Title, Top } from './styles';
import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Pedro</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
