import React from 'react';
import { Text, Image } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

const Logo = require('@/assets/ArcoprimeLogo.png');

export default function Loading() {
  return (
    <ScreenContainer>
      <Image source={Logo} style={{ width: 300, height: 100 }} />
      <Text> Cargando ...</Text>
    </ScreenContainer>
  );
}
