import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from '@/assets/styles/index';

import MainKpiCard from '@/components/MainKpiCard.jsx';

export default function KPIContainer() {
  const navigation = useNavigation();
  const mainKPIs = useSelector((state) => state.kpi.mainKPIs);

  const kpis = mainKPIs.map((kpi) => (
    <MainKpiCard navigation={navigation} kpi={kpi} key={kpi.id} />
  ));

  return (
    <View style={styles.kpiView}>
      <Text style={styles.kpiTitle}>KPIs</Text>
      {kpis.length > 0 ? (
        <ScrollView horizontal style={styles.kpiScroll}>
          <View style={styles.kpiCardsView}>{kpis}</View>
        </ScrollView>
      ) : (
        <Text style={styles.warningText}> No hay KPIs para mostrar.</Text>
      )}
    </View>
  );
}
