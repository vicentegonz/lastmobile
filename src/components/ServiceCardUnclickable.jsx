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
            <LinearChart
              datesarray={service.data}
              weekarray={service.weekDates}
            />
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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
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
    weekDates: PropTypes.shape({
      d0: PropTypes.number,
      d1: PropTypes.number,
      d2: PropTypes.number,
      d3: PropTypes.number,
      d4: PropTypes.number,
      d5: PropTypes.number,
      d6: PropTypes.number,
      d7: PropTypes.number,
    }),
    variationLWNumber: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    variationLWpercentage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    variationYNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    variationYpercentage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

ServiceCardUnclickable.defaultProps = {
  service: PropTypes.shape({
    value: 0,
    name: 'SI',
    data: PropTypes.shape({
      v1: '0',
      v2: '0',
      v3: '0',
      v4: '0',
      v5: '0',
      v6: '0',
      v7: '0',
      v8: '0',
    }),
    weekDates: PropTypes.shape({
      d0: 0,
      d1: 0,
      d2: 0,
      d3: 0,
      d4: 0,
      d5: 0,
      d6: 0,
      d7: 0,
    }),
    variationLWNumber: 0,
    variationLWpercentage: 0,
    variationYNumber: 0,
    variationYpercentage: 0,
    id: 0,
  }),
};
