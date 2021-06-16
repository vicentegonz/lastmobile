import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

import ServiceCardText from '@/components/ServiceCardText.jsx';

export default function ServiceCardUnclickable({ service }) {
  return (
    <View>
      <Card style={styles.service}>
        <Card.Header title={service.name} />
        <Card.Body style={styles.serviceBody}>
          {service.value !== undefined ? (
            <Text style={styles.serviceValue}>{service.value}</Text>
          ) : null}

          <View style={styles.servicesDifferences}>
            <View>
              <ServiceCardText
                variationNumber={service.variationYNumber}
                variationPercentage={service.variationYpercentage}
                id={service.name}
              />
              <Text>Ayer</Text>
            </View>

            <View>
              <ServiceCardText
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
