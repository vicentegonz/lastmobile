/* eslint-disable object-curly-newline */
import React from 'react';
import { StatusBar, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import EventCard from '@/components/EventCard.jsx';
import KpiCard from '@/components/KpiCard.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import styles from '@/assets/styles/index.jsx';
import { WhiteSpace } from '@ant-design/react-native';

export default function Landing() {
  const navigation = useNavigation();
  const allKpis = useSelector((state) => state.kpi.storeKpis);
  const allServices = useSelector((state) => state.services.storeServices);
  const lastNEvents = useSelector((state) => state.event.lastNEvents);

  const services = allServices
    .slice(allServices.length - 1, allServices.length)
    .map((service) => (
      <ServiceCard navigation={navigation} service={service} key={service.id} />
    ));

  const kpis = allKpis.map((kpi) => (
    <KpiCard navigation={navigation} kpi={kpi} key={kpi.id} />
  ));

  const events = lastNEvents.map((event) => (
    <EventCard key={event.id} navigation={navigation} event={event} />
  ));

  return (
    <ScrollView style={styles.landingView}>
      <StatusBar backgroundColor="#052D4C" />
      <WhiteSpace size="md" />

      <View style={styles.landingHorizontalViewKPI}>
        <Text style={styles.landingSubTitle}>KPIs</Text>
        <ScrollView horizontal style={styles.landingScrollView}>
          <View>
            <View style={styles.landingScrollViewChild}>{kpis}</View>
          </View>
        </ScrollView>
      </View>

      <WhiteSpace size="sm" />
      <View style={styles.landingHorizontalViewService}>
        <Text style={styles.landingSubTitleService}>
          Indicadores de servicio
        </Text>
        <View>
          <View>{services}</View>
        </View>
      </View>

      <WhiteSpace size="sm" />
      <View style={styles.landingView}>
        <Text style={styles.landingEventsTitle}>Últimos eventos</Text>
        <ScrollView>{events}</ScrollView>
      </View>

      <WhiteSpace size="md" />
    </ScrollView>
  );
}
