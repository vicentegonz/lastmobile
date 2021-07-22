import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import AlertCard from '@/components/AlertCard.jsx';

import styles from '@/assets/styles/index';

export default function AlertContainer() {
  const lastNAlerts = useSelector((state) => state.alert.lastNAlerts);

  const alerts = lastNAlerts.map((alert) => (
    <AlertCard key={alert.id + alert.store} alert={alert} />
  ));

  return (
    <View style={styles.landingView}>
      <Text style={styles.alertsTitle}>Últimas alertas</Text>
      {alerts.length > 0 ? (
        <ScrollView>{alerts}</ScrollView>
      ) : (
        <Text style={styles.warningText}> No hay alertas para mostrar</Text>
      )}
    </View>
  );
}
