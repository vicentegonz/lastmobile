import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, Icon, WhiteSpace } from '@ant-design/react-native';
import eventsStyles from '@/assets/styles/events';

export default function EventCard({ event }) {
  const eventIcon = <Icon name="alert" size="md" color="black" />;

  return (
    <View>
      <WhiteSpace size="md" />
      <Card style={eventsStyles.eventCard}>
        <Card.Header
          title={`Evento ${event.id}`}
          thumbStyle={eventsStyles.eventThumbIcon}
          thumb={eventIcon}
          extra={`Tienda: ${event.store}`}
        />
        <Card.Body>
          <View style={eventsStyles.eventContent}>
            {event.data.date !== undefined ? (
              <Text style={eventsStyles.eventCardText}>
                {`Fecha: ${event.data.date}`}
              </Text>
            ) : null}
            <Text style={eventsStyles.eventCardText}>
              {`Descripción: ${event.data.event}`}
            </Text>
          </View>
        </Card.Body>
      </Card>
    </View>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    data: PropTypes.shape({
      date: PropTypes.string,
      event: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    store: PropTypes.number.isRequired,
  }).isRequired,
};
