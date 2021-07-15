/* eslint-disable no-param-reassign */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import round from '@/utils/round';
import kpiStyles from '@/assets/styles/kpis';

export default function KpiCategoryTopText({
  variationN,
  variationP,
  middle,
  unit,
}) {
  let color;
  let icon;
  let text;

  const isZero = round(variationN, 1) === ('-0,0' || '0,0');

  if (variationN > 0 && !isZero) {
    color = '#ff4d4f';
    icon = <Icon name="arrow-down" size="md" color={color} />;
  } else if (variationN < 0 && !isZero) {
    color = '#52c41a';
    icon = <Icon name="arrow-up" size="md" color={color} />;
  } else {
    color = 'black';
    text = (
      <Text
        style={{
          color,
          fontSize: 20,
          fontFamily: 'robotoBold',
        }}
      >
        Sin variación
      </Text>
    );
  }

  if (unit === 'unidades') {
    text = (
      <Text
        style={{
          color,
          fontFamily: 'robotoBold',
          fontSize: 20,
        }}
      >
        {round(variationN, 1) === '-'
          ? round(variationN, 1)
          : `${round(variationN, 1)} ${unit}`}
      </Text>
    );
  } else if (unit === '$') {
    text = (
      <Text
        style={{
          color,
          fontFamily: 'robotoBold',
          fontSize: 20,
        }}
      >
        {round(variationN, 1) === '-'
          ? round(variationN, 1)
          : `${unit} ${round(variationN, 1)}`}
      </Text>
    );
  } else if (!isZero) {
    text = (
      <Text
        style={{
          color,
          fontFamily: 'robotoBold',
          fontSize: 20,
        }}
      >
        {`${round(variationN, 1)}`}
      </Text>
    );
  }

  return (
    <View style={kpiStyles.topView}>
      {text}
      <View style={kpiStyles.textView}>
        {icon}
        <Text style={kpiStyles.text}>{middle}</Text>
      </View>

      <Text
        style={{
          color,
          fontFamily: 'robotoBold',
          fontSize: 20,
        }}
      >
        {round(variationP, 1) === '-'
          ? round(variationP, 1)
          : `${round(variationP, 1)}%`}
      </Text>
    </View>
  );
}

KpiCategoryTopText.propTypes = {
  variationN: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variationP: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  middle: PropTypes.string,
  unit: PropTypes.string,
};

KpiCategoryTopText.defaultProps = {
  variationN: 0,
  variationP: 0,
  middle: '',
  unit: '',
};
