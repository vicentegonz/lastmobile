import React from 'react';
import { useSelector } from 'react-redux';
import { Text, StatusBar } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function OneEvent() {
  const given = useSelector((state) => state.profile.givenName);

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Text>{`This is the Event view for ${given}`}</Text>
    </ScreenContainer>
  );
}
