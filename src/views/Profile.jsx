import React from 'react';
import { Text, StatusBar } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';
import LogoutButton from '@/components/LogoutButton.jsx';

export default function Profile() {
  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Text>WIP: Profile</Text>
      <LogoutButton />
    </ScreenContainer>
  );
}
