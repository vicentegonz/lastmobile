/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import round from '@/utils/round';

export default function CardText({ variationNumber, variationPercentage }) {
  let tone = 'black';
  let icon;

  if (variationNumber > 0) {
    tone = 'green';
    icon = (
      <Icon name="arrow-up" size="md" color={tone} style={{ marginTop: 0 }} />
    );
  } else if (variationNumber < 0) {
    tone = 'red';
    icon = (
      <Icon name="arrow-down" size="md" color={tone} style={{ marginTop: 0 }} />
    );
  }
  return (
    <View style={{ flexDirection: 'row', marginLeft: 0 }}>
      {icon}
      <Text
        style={{
          color: tone,
          marginTop: 0,
          fontSize: 20,
          fontFamily: 'robotoBold',
        }}
      >
        {`${round(variationNumber, 1, true)} (${round(
          variationPercentage,
          1,
          true,
        )}%)`}
      </Text>
    </View>
  );
}

CardText.propTypes = {
  variationNumber: PropTypes.number,
  variationPercentage: PropTypes.number,
};

CardText.defaultProps = {
  variationNumber: 0,
  variationPercentage: 0,
};
