import React from 'react';
import { PropTypes } from 'prop-types';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const chartConfig = {
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#FFFFFF',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 3,
  propsForDots: {
    r: '3',
  },
};

const screenWidth = Dimensions.get('window').width;

export default function LinearChart(datesarray) {
  const array = [
    parseFloat(datesarray.datesarray.v1.replace(',', '.')),
    parseFloat(datesarray.datesarray.v2.replace(',', '.')),
    parseFloat(datesarray.datesarray.v3.replace(',', '.')),
    parseFloat(datesarray.datesarray.v4.replace(',', '.')),
    parseFloat(datesarray.datesarray.v5.replace(',', '.')),
    parseFloat(datesarray.datesarray.v6.replace(',', '.')),
    parseFloat(datesarray.datesarray.v7.replace(',', '.')),
    parseFloat(datesarray.datesarray.v8.replace(',', '.')),
  ];
  const data = {
    datasets: [
      {
        data: array,
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={screenWidth - 130}
      height={80}
      chartConfig={chartConfig}
      withHorizontalLabels={false}
      withInnerLines={false}
      withOuterLines={false}
    />
  );
}

LinearChart.propTypes = {
  datesarray: PropTypes.shape({
    datesarray: PropTypes.shape({
      v1: PropTypes.string,
      v2: PropTypes.string,
      v3: PropTypes.string,
      v4: PropTypes.string,
      v5: PropTypes.string,
      v6: PropTypes.string,
      v7: PropTypes.string,
      v8: PropTypes.string,
    }),
  }),
};

LinearChart.defaultProps = {
  datesarray: PropTypes.shape({
    v1: '0',
    v2: '0',
    v3: '0',
    v4: '0',
    v5: '0',
    v6: '0',
    v7: '0',
    v8: '0',
  }),
};
