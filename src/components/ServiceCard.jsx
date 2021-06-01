import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

export default function ServiceCard({ navigation, service }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Evento')}>
      <WhiteSpace size="md" />
      <Card style={styles.kpiCardContainer}>
        <Card.Header title={`S. ${service.name}`} />
        <Card.Body>
          <View style={styles.cardContent}>
            {service.value !== undefined ? (
              <Text adjustsFontSizeToFit style={styles.kpiCardText}>
                {service.value}
              </Text>
            ) : null}
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  );
}

ServiceCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  service: PropTypes.shape({
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
