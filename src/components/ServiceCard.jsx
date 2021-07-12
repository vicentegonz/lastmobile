import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import servicesStyles from '@/assets/styles/services';
import MoreInformation from '@/components/MoreInformation.jsx';
import LinearChart from '@/components/LinearChart.jsx';

import ServiceCardText from '@/components/ServiceCardText.jsx';

export default function ServiceCard({ navigation, service }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Servicios')}>
      <WhiteSpace size="md" />
      <Card style={servicesStyles.mainServiceCard}>
        <Card.Header title={service.name} extra={<MoreInformation />} />
        <Card.Body style={servicesStyles.mainServiceBody}>
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

          <View style={servicesStyles.mainServiceDifferences}>
            <View>
              <ServiceCardText
                variationNumber={service.variationYNumber}
                variationPercentage={service.variationYpercentage}
              />
              <Text>Ayer</Text>
            </View>

            <View>
              <ServiceCardText
                variationNumber={service.variationLWNumber}
                variationPercentage={service.variationLWpercentage}
              />
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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
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
  }),
};

ServiceCard.defaultProps = {
  service: PropTypes.shape({
    value: 0,
    name: 'Nota Final',
    variationLWNumber: 0,
    variationLWpercentage: 0,
    variationYNumber: 0,
    variationYpercentage: 0,
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
  }),
};
