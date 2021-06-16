import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import EventCard from './EventCard.jsx';

export default function EventContainer({ navigation }) {
  const allEvents = useSelector((state) => state.event.storeEvents);

  const allEventsStore = allEvents.map((event) => (
    <EventCard key={event.id} navigation={navigation} event={event} />
  ));
  return <View>{allEventsStore}</View>;
}

EventContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
