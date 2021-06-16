/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { round } from '@/utils/round';

export default function KpiCategoryTopText({
  variationN,
  variationP,
  middle,
  unit,
}) {
  let color;
  let icon;
  let text;

  const isZero = round(variationN, false) === ('-0,0' || '0,0');

  if (variationN > 0 && !isZero) {
    color = 'red';
    icon = <Icon name="arrow-down" size="md" color={color} />;
  } else if (variationN < 0 && !isZero) {
    color = 'green';
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
        {`${round(variationN, false)} ${unit}`}
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
        {`${unit} ${round(variationN, false)}`}
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
        {`${round(variationN, false)}`}
      </Text>
    );
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {text}
      <View style={{ flexDirection: 'row' }}>
        {icon}
        <Text style={{ fontFamily: 'robotoBold', fontSize: 15 }}>{middle}</Text>
      </View>

      <Text
        style={{
          color,
          fontFamily: 'robotoBold',
          fontSize: 20,
        }}
      >
        {`${round(variationP, false)}%`}
      </Text>
    </View>
  );
}

KpiCategoryTopText.propTypes = {
  variationN: PropTypes.number,
  variationP: PropTypes.number,
  middle: PropTypes.string,
  unit: PropTypes.string,
};

KpiCategoryTopText.defaultProps = {
  variationN: 0,
  variationP: 0,
  middle: '',
  unit: '',
};
