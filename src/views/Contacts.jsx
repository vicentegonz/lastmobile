import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContactCard from '@/components/ContactCard.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';

export default function Contacts() {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <ContactCard title="Contacto 1" navigation={navigation} />
      <ContactCard title="Contacto 2" navigation={navigation} />
    </ScreenContainer>
  );
}
