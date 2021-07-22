import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import round from '@/utils/round';

import MainKPIValue from '@/components/MainKPIValue.jsx';
import KpiCategoryTopText from '@/components/KpiCategoryTopText.jsx';
import kpiStyles from '@/assets/styles/kpis';

export default function KPITopContainer({ mainKpi }) {
  let poaText;

  if (mainKpi.poa !== '-') {
    poaText = (
      <View>
        <View style={kpiStyles.poaView}>
          <Text style={kpiStyles.poa}>{`POA: $${round(mainKpi.poa, 1)}`}</Text>
          <Text style={kpiStyles.poa}>
            {`Progreso: ${round(mainKpi.poaDiff, 1)}%`}
          </Text>
        </View>
        <WhiteSpace size="md" />
      </View>
    );
  }
  return (
    <View style={kpiStyles.kpiCategoryTop}>
      <Text style={kpiStyles.kpiName}>{mainKpi.name}</Text>
      <WhiteSpace size="lg" />
      <View>
        <MainKPIValue value={mainKpi.value} unit={mainKpi.units} />
        <WhiteSpace size="lg" />
        {poaText || null}
      </View>

      <KpiCategoryTopText
        variationN={mainKpi.variationYNumber ? mainKpi.variationYNumber : '-'}
        variationP={
          mainKpi.variationYpercentage ? mainKpi.variationYpercentage : '-'
        }
        middle="Ayer"
        unit={mainKpi.units}
      />
      <WhiteSpace size="lg" />

      <KpiCategoryTopText
        variationN={mainKpi.variationLWNumber ? mainKpi.variationLWNumber : '-'}
        variationP={
          mainKpi.variationLWpercentage ? mainKpi.variationLWpercentage : '-'
        }
        middle="Semana pasada"
        unit={mainKpi.units}
      />
    </View>
  );
}

KPITopContainer.propTypes = {
  mainKpi: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    variationYNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    variationLWNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    variationYpercentage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    variationLWpercentage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    units: PropTypes.string,
    poaDiff: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    poa: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};
