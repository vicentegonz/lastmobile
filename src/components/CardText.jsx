/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from '@ant-design/react-native';

export default function CardText({ variation, id }) {
  let tone = '';
  let icon;

  let marginT = 0;
  let marginL = 0;
  if (id === 6) {
    marginT = 0;
    // marginL = 60;
    marginL = 0;
  }
  if (variation > 0) {
    tone = 'green';
    icon = (
      <Icon
        name="arrow-up"
        size="md"
        color={tone}
        style={{ marginTop: marginT }}
      />
    );
  } else if (variation < 0) {
    tone = 'red';
    icon = (
      <Icon
        name="arrow-down"
        size="md"
        color={tone}
        style={{ marginTop: marginT }}
      />
    );
  } else if (variation === 0) {
    tone = 'black';
  }
  return (
    <View style={{ flexDirection: 'row', marginLeft: marginL }}>
      {icon}
      <Text
        style={{
          color: tone,
          marginTop: marginT,
          fontSize: 20,
          fontFamily: 'robotoBold',
        }}
      >
        {variation}
      </Text>
    </View>
  );
}

CardText.propTypes = {
  variation: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
