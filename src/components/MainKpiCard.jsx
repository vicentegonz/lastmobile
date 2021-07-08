import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import kpiStyles from '@/assets/styles/kpis';

import MoreInformation from '@/components/MoreInformation.jsx';
import MainKPIValue from '@/components/MainKPIValue.jsx';
import MainKpiCardText from '@/components/MainKpiCardText.jsx';

export default function MainKpiCard({ kpi, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Kpis', { mainKpi: kpi })}
      style={kpiStyles.mainKpiContainer}
    >
      <WhiteSpace size="md" />
      <Card style={kpiStyles.mainKpiCard}>
        <Card.Header
          title={kpi.name}
          extra={<MoreInformation />}
          style={kpiStyles.mainKpiHeader}
        />
        <Card.Body>
          {kpi.value !== undefined ? (
            <MainKPIValue value={kpi.value} unit={kpi.units} />
          ) : null}
          <WhiteSpace size="md" />
          <View style={kpiStyles.mainKpiDifferences}>
            <View>
              <MainKpiCardText
                variationN={kpi.variationYNumber}
                variationP={kpi.variationYpercentage}
              />
              <Text>Ayer</Text>
            </View>

            <View>
              <MainKpiCardText
                variationN={kpi.variationLWNumber}
                variationP={kpi.variationLWpercentage}
              />
              <Text>Semana pasada</Text>
            </View>
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  );
}

MainKpiCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  kpi: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
    units: PropTypes.string,
    variationYNumber: PropTypes.number,
    variationYpercentage: PropTypes.number,
    variationLWNumber: PropTypes.number,
    variationLWpercentage: PropTypes.number,
  }),
};

MainKpiCard.defaultProps = {
  kpi: PropTypes.shape({
    name: '',
    value: 0,
    units: '',
    variationYNumber: 0,
    variationYpercentage: 0,
    variationLWNumber: 0,
    variationLWpercentage: 0,
  }),
};