import React from 'react';
import { Text, Image } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';
import styles from '@/assets/styles/index';

const Logo = require('@/assets/ArcoprimeLogo.png');

export default function Loading() {
  return (
    <ScreenContainer>
      <Image source={Logo} style={styles.imagen} />
      <Text> Cargando ...</Text>
    </ScreenContainer>
  );
}
