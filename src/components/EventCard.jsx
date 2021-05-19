import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Icon } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

export default function EventCard({ navigation, event }) {
  const eventIcon = <Icon name="alert" size="md" color="black" />;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Event')}>
      <Card style={styles.cardContainer}>
        <Card.Header
          title={`Event ${event.id}`}
          thumbStyle={styles.thumbIcon}
          thumb={eventIcon}
        />
        <Card.Body>
          <View style={styles.cardContent}>
            {event.data.date !== undefined ? (
              <Text style={styles.cardText}>{`Date: ${event.data.date}`}</Text>
            ) : null}
            <Text style={styles.cardText}>
              {`Description: ${event.data.event}`}
            </Text>
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  );
}

EventCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  event: PropTypes.shape({
    data: PropTypes.shape({
      date: PropTypes.string,
      event: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
  }).isRequired,
};
