/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { round } from '@/utils/round';

export default function MainKpiCardText({ variationN, variationP }) {
  let color;
  let icon;

  if (variationN > 0) {
    color = 'red';
    icon = <Icon name="arrow-down" size="md" color={color} />;
  } else if (variationN < 0) {
    color = 'green';
    icon = <Icon name="arrow-up" size="md" color={color} />;
  } else {
    color = 'black';
    variationN = 'Sin variación';
    variationP = '';
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {icon}
      <Text
        style={{
          color,
          fontFamily: 'robotoBold',
          alignSelf: 'center',
          fontSize: 20,
        }}
      >
        {`${round(variationP, false)}%`}
      </Text>
    </View>
  );
}

MainKpiCardText.propTypes = {
  variationN: PropTypes.number,
  variationP: PropTypes.number,
};

MainKpiCardText.defaultProps = {
  variationN: 0,
  variationP: 0,
};
