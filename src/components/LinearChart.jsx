import React from 'react';
import { PropTypes } from 'prop-types';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

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
  const min = Math.min(...array);
  const max = Math.max(...array);
  const week = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  function* yLabel() {
    yield* [min, '', max];
  }
  const yLabelIterator = yLabel();

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

  const data = {
    labels: [
      week[datesarray.weekarray.d0],
      week[datesarray.weekarray.d1],
      week[datesarray.weekarray.d2],
      week[datesarray.weekarray.d3],
      week[datesarray.weekarray.d4],
      week[datesarray.weekarray.d5],
      week[datesarray.weekarray.d6],
      week[datesarray.weekarray.d7],
    ],
    datasets: [
      {
        data: array,
      },
    ],
  };

  let chartWidth = 160;
  if (array[7].toString().length < 4) {
    chartWidth = 130;
  }

  return (
    <LineChart
      data={data}
      width={screenWidth - chartWidth}
      segments={2}
      height={170}
      formatYLabel={() => yLabelIterator.next().value}
      chartConfig={chartConfig}
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
  weekarray: PropTypes.shape({
    weekarray: PropTypes.shape({
      d0: PropTypes.number,
      d1: PropTypes.number,
      d2: PropTypes.number,
      d3: PropTypes.number,
      d4: PropTypes.number,
      d5: PropTypes.number,
      d6: PropTypes.number,
      d7: PropTypes.number,
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
  weekarray: PropTypes.shape({
    d0: 0,
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0,
    d7: 0,
  }),
};
