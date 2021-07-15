import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import round from '@/utils/round';
import kpiStyles from '@/assets/styles/kpis';

export default function MainKPIValue({ value, unit }) {
  let text;

  if (unit === 'unidades') {
    text = (
      <Text style={kpiStyles.KpiValue}>{`${round(value, 1)} ${unit}`}</Text>
    );
  } else if (unit === '$') {
    text = (
      <Text style={kpiStyles.KpiValue}>{`${unit} ${round(value, 1)}`}</Text>
    );
  } else {
    text = <Text style={kpiStyles.KpiValue}>{`${round(value, 1)}`}</Text>;
  }

  return text;
}

MainKPIValue.propTypes = {
  value: PropTypes.number,
  unit: PropTypes.string,
};

MainKPIValue.defaultProps = {
  value: 0,
  unit: '',
};
