import React from 'react';
import { Text, StatusBar } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function OneEvent() {
  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Text>This is the Event view</Text>
    </ScreenContainer>
  );
}
