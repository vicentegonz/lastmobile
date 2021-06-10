import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import CardText from '@/components/CardText.jsx';
import styles from '@/assets/styles/index.jsx';

export default function ServiceCard({ navigation, service }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Servicios')}>
      <WhiteSpace size="md" />
      <Card style={styles.serviceCardContainer}>
        <Card.Header title={`S. ${service.name}`} />
        <Card.Body style={styles.kpiCardBody}>
          <View>
            {service.value !== undefined ? (
              <Text style={styles.serviceCardText}>{service.value}</Text>
            ) : null}
          </View>
          <View style={styles.kpiDifferences}>
            <View>
              <CardText variation={service.variationY} id={service.id} />
              <Text>Ayer</Text>
            </View>

            <View>
              <CardText variation={service.variationLW} id={service.id} />
              <Text>Semana pasada</Text>
            </View>
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
    variationY: PropTypes.number.isRequired,
    variationLW: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
