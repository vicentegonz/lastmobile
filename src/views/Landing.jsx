import React from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index';

import LoadingLanding from '@/components/containers/LoadingLanding.jsx';
import KPIContainer from '@/components/containers/KPIContainer.jsx';
import ServiceContainer from '@/components/containers/ServiceContainer.jsx';
import AlertContainer from '@/components/containers/AlertContainer.jsx';

import DropPicker from '@/components/DropPicker.jsx';

export default function Landing() {
  const servicePicker = useSelector((state) => state.services.picker);
  const alertPicker = useSelector((state) => state.alert.picker);
  const kpiPicker = useSelector((state) => state.kpi.picker);

  const stores = useSelector((state) => state.profile.stores);

  return (
    <View style={styles.landingView}>
      <StatusBar backgroundColor="#052D4C" />

      {stores.length === 1 ? null : <DropPicker />}

      {servicePicker || alertPicker || kpiPicker ? (
        <LoadingLanding />
      ) : (
        <ScrollView style={styles.landingScroll}>
          <WhiteSpace size="sm" />

          <KPIContainer />

          <WhiteSpace size="md" />

          <ServiceContainer />

          <WhiteSpace size="md" />

          <AlertContainer />

          <WhiteSpace size="md" />
        </ScrollView>
      )}
    </View>
  );
}
