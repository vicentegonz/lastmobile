/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { round } from '@/utils/round';

export default function ServiceCardText({
  variationNumber,
  variationPercentage,
}) {
  let tone;
  let icon;
  let text;

  const isZero = round(variationNumber, false) === ('-0,0' || '0,0');

  if (variationNumber > 0 && !isZero) {
    tone = 'red';
    icon = (
      <Icon name="arrow-down" size="md" color={tone} style={{ marginTop: 0 }} />
    );
    text = (
      <Text
        style={{
          color: tone,
          marginTop: 0,
          fontSize: 20,
          fontFamily: 'robotoBold',
        }}
      >
        {`${round(variationNumber, false)} (${round(
          variationPercentage,
          false,
        )}%)`}
      </Text>
    );
  } else if (variationNumber < 0 && !isZero) {
    tone = 'green';
    icon = (
      <Icon name="arrow-up" size="md" color={tone} style={{ marginTop: 0 }} />
    );
    text = (
      <Text
        style={{
          color: tone,
          marginTop: 0,
          fontSize: 20,
          fontFamily: 'robotoBold',
        }}
      >
        {`${round(variationNumber, false)} (${round(
          variationPercentage,
          false,
        )}%)`}
      </Text>
    );
  } else {
    tone = 'black';
    text = (
      <Text
        style={{
          color: tone,
          marginTop: 0,
          fontSize: 20,
          fontFamily: 'robotoBold',
        }}
      >
        Sin variación
      </Text>
    );
  }
  return (
    <View style={{ flexDirection: 'row', marginLeft: 0 }}>
      {icon}
      {text}
    </View>
  );
}

ServiceCardText.propTypes = {
  variationNumber: PropTypes.number,
  variationPercentage: PropTypes.number,
};

ServiceCardText.defaultProps = {
  variationNumber: 0,
  variationPercentage: 0,
};
