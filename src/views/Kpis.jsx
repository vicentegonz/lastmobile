import React from 'react';
import {
  StatusBar, ScrollView, Text, View,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index';
import kpiStyles from '@/assets/styles/kpis';

import KpiCategory from '@/components/KpiCategory.jsx';
import KpiCategoryTopText from '@/components/KpiCategoryTopText.jsx';

export default function Kpis({ route }) {
  const { mainKpi } = route.params;

  const allKpis = useSelector((state) => state.kpi.storeKpis);

  const thisKpi = Object.values(allKpis[mainKpi.name]);

  const kpis = thisKpi.map((kpi) => (
    <KpiCategory kpi={kpi} key={`${mainKpi.name}-${kpi.category}`} />
  ));

  return (
    <ScrollView style={styles.generalScreensContainer}>
      <StatusBar backgroundColor="#052D4C" />
      <WhiteSpace size="md" />
      <View style={kpiStyles.kpiCategoryTop}>
        <Text style={kpiStyles.kpiName}>{mainKpi.name}</Text>
        <WhiteSpace size="lg" />

        <KpiCategoryTopText
          variationN={mainKpi.variationYNumber}
          variationP={mainKpi.variationYpercentage}
          middle="Ayer"
          unit={mainKpi.units}
        />
        <WhiteSpace size="lg" />

        <KpiCategoryTopText
          variationN={mainKpi.variationLWNumber}
          variationP={mainKpi.variationLWpercentage}
          middle="Semana pasada"
          unit={mainKpi.units}
        />
      </View>
      <WhiteSpace size="md" />
      <ScrollView>{kpis}</ScrollView>
    </ScrollView>
  );
}

Kpis.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      mainKpi: PropTypes.shape({
        name: PropTypes.string.isRequired,
        variationYNumber: PropTypes.number.isRequired,
        variationLWNumber: PropTypes.number.isRequired,
        variationYpercentage: PropTypes.number.isRequired,
        variationLWpercentage: PropTypes.number.isRequired,
        units: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
