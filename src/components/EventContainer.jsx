import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes, oneOfType } from 'prop-types';
import { View } from 'react-native';
import EventCard from './EventCard.jsx';

export default function EventContainer({ navigation, idStore }) {
  const allEvents = useSelector((state) => state.event.storeEvents)[idStore];

  const allEventsStore = allEvents.map((event) => (
    <EventCard key={event.id} navigation={navigation} event={event} />
  ));
  return <View>{allEventsStore}</View>;
}

EventContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  idStore: oneOfType([PropTypes.number]),
};

EventContainer.defaultProps = {
  idStore: undefined,
};
