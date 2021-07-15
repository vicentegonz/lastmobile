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
  let kpis;
  const { mainKpi } = route.params;

  const allKpis = useSelector((state) => state.kpi.storeKpis);

  if (Object.keys(allKpis).length > 0) {
    const thisKpi = Object.values(allKpis[mainKpi.name]);

    kpis = thisKpi.map((kpi) => (
      <KpiCategory kpi={kpi} key={`${mainKpi.name}-${kpi.category}`} />
    ));
  }

  return (
    <ScrollView style={styles.generalScreensContainer}>
      <StatusBar backgroundColor="#052D4C" />
      <WhiteSpace size="md" />
      <View style={kpiStyles.kpiCategoryTop}>
        <Text style={kpiStyles.kpiName}>{mainKpi.name}</Text>
        <WhiteSpace size="lg" />

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
          variationN={
            mainKpi.variationLWNumber ? mainKpi.variationLWNumber : '-'
          }
          variationP={
            mainKpi.variationLWpercentage ? mainKpi.variationLWpercentage : '-'
          }
          middle="Semana pasada"
          unit={mainKpi.units}
        />
      </View>
      <WhiteSpace size="md" />
      {kpis ? (
        <ScrollView>{kpis}</ScrollView>
      ) : (
        <Text>No hay KPIs para mostrar.</Text>
      )}
    </ScrollView>
  );
}

Kpis.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      mainKpi: PropTypes.shape({
        name: PropTypes.string.isRequired,
        variationYNumber: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        variationLWNumber: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        variationYpercentage: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        variationLWpercentage: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        units: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
