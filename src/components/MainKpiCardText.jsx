/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import round from '@/utils/round';
import kpiStyles from '@/assets/styles/kpis';

export default function MainKpiCardText({ variationN, variationP }) {
  let color;
  let icon;

  if (variationN > 0) {
    color = '#ff4d4f';
    icon = <Icon name="arrow-down" size="md" color={color} />;
  } else if (variationN < 0) {
    color = '#52c41a';
    icon = <Icon name="arrow-up" size="md" color={color} />;
  } else {
    color = 'black';
    variationN = 'Sin variación';
    variationP = '';
  }

  return (
    <View style={kpiStyles.mainKpiView}>
      {icon}
      <Text
        style={{
          color,
          fontFamily: 'robotoBold',
          alignSelf: 'center',
          fontSize: 20,
        }}
      >
        {`${round(variationP, 1)}%`}
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
