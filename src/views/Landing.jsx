/* eslint-disable object-curly-newline */
import React from 'react';
import { StatusBar, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index';

import MainKpiCard from '@/components/MainKpiCard.jsx';
import EventCard from '@/components/EventCard.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

export default function Landing() {
  const navigation = useNavigation();
  const mainKPIs = useSelector((state) => state.kpi.mainKPIs);

  const mainService = useSelector((state) => state.services.mainService);
  const lastNEvents = useSelector((state) => state.event.lastNEvents);

  const kpis = mainKPIs.map((kpi) => (
    <MainKpiCard navigation={navigation} kpi={kpi} key={kpi.id} />
  ));

  const events = lastNEvents.map((event) => (
    <EventCard key={event.id} navigation={navigation} event={event} />
  ));

  return (
    <View style={styles.landingView}>
      <StatusBar backgroundColor="#052D4C" />
      <WhiteSpace size="md" />

      <View style={styles.kpiView}>
        <Text style={styles.kpiTitle}>KPIs</Text>
        <ScrollView horizontal style={styles.kpiScroll}>
          <View style={styles.kpiCardsView}>{kpis}</View>
        </ScrollView>
      </View>

      <WhiteSpace size="sm" />
      <View style={styles.serviceView}>
        <Text style={styles.serviceTitle}>Indicadores de servicio</Text>
        <ServiceCard
          navigation={navigation}
          service={mainService}
          key={mainService.name}
        />
      </View>

      <WhiteSpace size="sm" />
      <View style={styles.landingView}>
        <Text style={styles.eventsTitle}>Últimos eventos</Text>
        <ScrollView>{events}</ScrollView>
      </View>

      <WhiteSpace size="md" />
    </View>
  );
}
