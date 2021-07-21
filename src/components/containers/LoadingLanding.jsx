import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import styles from '@/assets/styles/index';

export default function LoadingLanding() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="#05426F" />
      <Text>Cargando ...</Text>
    </View>
  );
}
