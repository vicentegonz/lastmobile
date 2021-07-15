import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import round from '@/utils/round';
import servicesStyles from '@/assets/styles/services';

export default function ServiceCardText({
  variationNumber,
  variationPercentage,
}) {
  let tone;
  let icon;
  let text;

  const isZero = round(variationNumber, 2) === ('-0,0' || '0,0');
  if (variationNumber > 0 && !isZero) {
    tone = '#ff4d4f';
    icon = (
      <Icon
        name="arrow-down"
        size="md"
        color={tone}
        style={servicesStyles.icon}
      />
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
        {`${round(variationNumber, 2)} (${round(variationPercentage, 1)}%)`}
      </Text>
    );
  } else if (variationNumber < 0 && !isZero) {
    tone = '#52c41a';
    icon = (
      <Icon
        name="arrow-up"
        size="md"
        color={tone}
        style={servicesStyles.icon}
      />
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
        {`${round(variationNumber, 2)} (${round(variationPercentage, 1)}%)`}
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
  if (variationNumber === '-') {
    tone = 'grey';
    text = (
      <Text
        style={{
          color: tone,
          marginTop: 0,
          fontSize: 20,
          fontFamily: 'robotoBold',
        }}
      >
        -
      </Text>
    );
  }
  return (
    <View style={servicesStyles.cardTextView}>
      {icon}
      {text}
    </View>
  );
}

ServiceCardText.propTypes = {
  variationNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variationPercentage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

ServiceCardText.defaultProps = {
  variationNumber: 0,
  variationPercentage: 0,
};
