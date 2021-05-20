import React from 'react';
import { useSelector } from 'react-redux';
import { Text, StatusBar } from 'react-native';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';

export default function OneStore() {
  const given = useSelector((state) => state.profile.givenName);

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <Text>{`Esta es una vista de la tienda de ${given}`}</Text>
    </ScreenContainer>
  );
}