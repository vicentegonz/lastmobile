import React from 'react';
import { Text, StatusBar } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function OneShop() {
  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Text>This is the Shop view</Text>
    </ScreenContainer>
  );
}
