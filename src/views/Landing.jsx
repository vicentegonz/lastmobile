import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import EventCard from '@/components/EventCard.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';

export default function Landing() {
  const navigation = useNavigation();
  const event = useSelector((state) => state.event.lastEvent);

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      {event !== undefined ? (
        <EventCard key={event.id} navigation={navigation} event={event} />
      ) : null}
    </ScreenContainer>
  );
}
