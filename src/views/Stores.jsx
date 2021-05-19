import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StoreCard from '@/components/StoreCard.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';

export default function Stores() {
  const navigation = useNavigation();
  const stores = useSelector((state) => state.profile.stores);

  const cards = stores.map((id) => (
    <StoreCard navigation={navigation} key={id} idStore={id} />
  ));

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      {cards}
    </ScreenContainer>
  );
}
