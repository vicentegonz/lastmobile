import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';

export default function KpiCardText({ variation }) {
  let color;
  let icon;

  if (variation > 0) {
    color = 'green';
    icon = <Icon name="arrow-up" size="md" color={color} />;
  } else if (variation < 0) {
    color = 'red';
    icon = <Icon name="arrow-down" size="md" color={color} />;
  } else if (variation === 0) {
    color = 'black';
    // eslint-disable-next-line no-param-reassign
    variation = 'Sin variación';
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
        {`$${variation} M`}
      </Text>
    </View>
  );
}

KpiCardText.propTypes = {
  variation: PropTypes.number.isRequired,
};
