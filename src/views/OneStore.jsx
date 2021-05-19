import React from 'react';
import { Text, StatusBar } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function OneStore() {
  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Text>This is the Store view</Text>
    </ScreenContainer>
  );
}
