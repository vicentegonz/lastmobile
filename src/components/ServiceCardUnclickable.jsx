import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import servicesStyles from '@/assets/styles/services';
import LinearChart from '@/components/LinearChart.jsx';

import ServiceCardText from '@/components/ServiceCardText.jsx';

export default function ServiceCardUnclickable({ service }) {
  return (
    <View style={servicesStyles.fullView}>
      <Card style={servicesStyles.service}>
        <Card.Header title={service.name} />
        <Card.Body style={servicesStyles.serviceBody}>
          <View style={servicesStyles.cardView}>
            {service.value !== undefined ? (
              <Text style={servicesStyles.serviceCardGraphText}>
                {service.value}
              </Text>
            ) : null}
            <LinearChart datesarray={service.data} />
          </View>

          <WhiteSpace size="md" />

          <View style={servicesStyles.servicesDifferences}>
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
    </View>
  );
}

ServiceCardUnclickable.propTypes = {
  service: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.shape({
      v1: PropTypes.string,
      v2: PropTypes.string,
      v3: PropTypes.string,
      v4: PropTypes.string,
      v5: PropTypes.string,
      v6: PropTypes.string,
      v7: PropTypes.string,
      v8: PropTypes.string,
    }),
    variationLWNumber: PropTypes.number.isRequired,
    variationLWpercentage: PropTypes.number.isRequired,
    variationYNumber: PropTypes.number.isRequired,
    variationYpercentage: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};
