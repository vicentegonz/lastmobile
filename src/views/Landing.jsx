import React from 'react';
import {
  StatusBar,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index';

import MainKpiCard from '@/components/MainKpiCard.jsx';
import AlertCard from '@/components/AlertCard.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import ServiceCardUnclickable from '@/components/ServiceCardUnclickable.jsx';
import DropPicker from '@/components/DropPicker.jsx';

export default function Landing() {
  const navigation = useNavigation();

  const servicePicker = useSelector((state) => state.services.picker);
  const alertPicker = useSelector((state) => state.alert.picker);
  const kpiPicker = useSelector((state) => state.kpi.picker);
  const mainKPIs = useSelector((state) => state.kpi.mainKPIs);
  const mainService = useSelector((state) => state.services.mainService);
  const npsService = useSelector((state) => state.services.npsService);
  const lastNAlerts = useSelector((state) => state.alert.lastNAlerts);
  const stores = useSelector((state) => state.profile.stores);

  const kpis = mainKPIs.map((kpi) => (
    <MainKpiCard navigation={navigation} kpi={kpi} key={kpi.id} />
  ));

  const alerts = lastNAlerts.map((alert) => (
    <AlertCard key={alert.id} navigation={navigation} alert={alert} />
  ));

  return (
    <View style={styles.landingView}>
      <StatusBar backgroundColor="#052D4C" />
      {stores.length === 1 ? null : <DropPicker />}

      {servicePicker || alertPicker || kpiPicker ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="#05426F" />
          <Text>Cargando ...</Text>
        </View>
      ) : (
        <ScrollView style={styles.landingScroll}>
          <WhiteSpace size="sm" />
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

          <WhiteSpace size="md" />
          <Text style={styles.serviceTitle}>Indicadores de servicio</Text>
          {Object.keys(mainService).length === 0
          && mainService.constructor === Object ? (
            <Text style={styles.warningText}>
              Por el momento no hay indicadores para mostrar
            </Text>
            ) : (
              <ScrollView horizontal style={styles.serviceView}>
                <ServiceCard
                  navigation={navigation}
                  service={mainService}
                  key={mainService.name}
                />
                <ServiceCardUnclickable
                  service={npsService}
                  key={npsService.id}
                />
              </ScrollView>
            )}

          <WhiteSpace size="md" />
          <View style={styles.landingView}>
            <Text style={styles.alertsTitle}>Últimas alertas</Text>
            {alerts.length > 0 ? (
              <ScrollView>{alerts}</ScrollView>
            ) : (
              <Text style={styles.warningText}>
                {' '}
                No hay alertas para mostrar
              </Text>
            )}
          </View>

          <WhiteSpace size="md" />
        </ScrollView>
      )}
    </View>
  );
}
