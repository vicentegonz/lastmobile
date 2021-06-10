import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import CardText from '@/components/CardText.jsx';
import styles from '@/assets/styles/index.jsx';

export default function ServiceCardUnclickable({ service }) {
  return (
    <View>
      <WhiteSpace size="md" />
      <Card style={styles.service}>
        <Card.Header title={`S. ${service.name}`} />
        <Card.Body>
          <View style={styles.cardContent}>
            {service.value !== undefined ? (
              <Text adjustsFontSizeToFit style={styles.serviceCardUnclickText}>
                {service.value}
              </Text>
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
    </View>
  );
}

ServiceCardUnclickable.propTypes = {
  service: PropTypes.shape({
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    variationY: PropTypes.number.isRequired,
    variationLW: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
