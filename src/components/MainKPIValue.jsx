/* eslint-disable no-useless-escape */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from '@/assets/styles/index.jsx';
import round from '@/utils/round';

export default function MainKPIValue({ value, unit }) {
  let text;

  if (unit === 'unidades') {
    text = (
      <Text style={styles.KpiValue}>{`${round(value, true)} ${unit}`}</Text>
    );
  } else if (unit === '$') {
    text = (
      <Text style={styles.KpiValue}>{`${unit} ${round(value, true)}`}</Text>
    );
  } else {
    text = <Text style={styles.KpiValue}>{`${round(value, true)}`}</Text>;
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
