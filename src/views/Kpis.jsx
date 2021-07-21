import React from 'react';
import { StatusBar, ScrollView, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index';

import KpiCategory from '@/components/KpiCategory.jsx';
import KPITopContainer from '@/components/containers/KPITopContainer.jsx';

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

      <KPITopContainer mainKpi={mainKpi} />

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
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
