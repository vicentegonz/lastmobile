/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { round } from '@/utils/round';

export default function KpiCategoryCardText({ variationN, variationP, unit }) {
  let color;
  let icon;
  let text;

  const isZero = round(variationN, false) === ('-0,0' || '0,0');

  if (variationN > 0 && !isZero) {
    color = 'red';
    icon = (
      <Icon
        name="arrow-down"
        size={30}
        color={color}
        style={{ alignSelf: 'center' }}
      />
    );
  } else if (variationN < 0 && !isZero) {
    color = 'green';
    icon = (
      <Icon
        name="arrow-up"
        size={30}
        color={color}
        style={{ alignSelf: 'center' }}
      />
    );
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
      <View>
        <Text
          style={{
            color,
            fontFamily: 'robotoBold',
            fontSize: 20,
          }}
        >
          {`${round(variationN, false)} ${unit}`}
        </Text>
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
  } else if (unit === '$') {
    text = (
      <View>
        <Text
          style={{
            color,
            fontFamily: 'robotoBold',
            fontSize: 20,
          }}
        >
          {`${unit} ${round(variationN, false)}`}
        </Text>
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
  } else if (!isZero) {
    text = (
      <View>
        <Text
          style={{
            color,
            fontFamily: 'robotoBold',
            fontSize: 20,
          }}
        >
          {`${round(variationN, false)}`}
        </Text>
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

  return (
    <View style={{ flexDirection: 'row' }}>
      {icon}
      {text}
    </View>
  );
}

KpiCategoryCardText.propTypes = {
  variationN: PropTypes.number,
  variationP: PropTypes.number,
  unit: PropTypes.string,
};

KpiCategoryCardText.defaultProps = {
  variationN: 0,
  variationP: 0,
  unit: '',
};
