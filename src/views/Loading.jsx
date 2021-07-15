import React from 'react';
import {
  Text, Image, ActivityIndicator, View,
} from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';
import styles from '@/assets/styles/index';

const Logo = require('@/assets/ArcoprimeLogo.png');

export default function Loading() {
  return (
    <ScreenContainer>
      <Image source={Logo} style={styles.imagen} />
      <View>
        <WhiteSpace size="lg" />
        <ActivityIndicator size="large" color="#05426F" />
        <Text> Cargando ...</Text>
      </View>
    </ScreenContainer>
  );
}
