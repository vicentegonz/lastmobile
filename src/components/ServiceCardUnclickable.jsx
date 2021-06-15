import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import CardText from '@/components/CardText.jsx';
import styles from '@/assets/styles/index.jsx';

export default function ServiceCardUnclickable({ service }) {
  return (
    <View>
      <Card style={styles.service}>
        <Card.Header title={service.name} />
        <Card.Body style={styles.kpiCardBody}>
          <View style={styles.servicesCardContent}>
            {service.value !== undefined ? (
              <Text style={styles.serviceCardText}>{service.value}</Text>
            ) : null}
          </View>
          <View style={styles.kpiDifferences}>
            <View>
              <CardText
                variationNumber={service.variationYNumber}
                variationPercentage={service.variationYpercentage}
                id={service.name}
              />
              <Text>Ayer</Text>
            </View>

            <View>
              <CardText
                variationNumber={service.variationLWNumber}
                variationPercentage={service.variationLWpercentage}
                id={service.name}
              />
              <Text>Semana pasada</Text>
            </View>
          </View>
        </Card.Body>
      </Card>
      <WhiteSpace size="md" />
    </View>
  );
}

ServiceCardUnclickable.propTypes = {
  service: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    variationLWNumber: PropTypes.number.isRequired,
    variationLWpercentage: PropTypes.number.isRequired,
    variationYNumber: PropTypes.number.isRequired,
    variationYpercentage: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};