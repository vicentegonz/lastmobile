import React from 'react';
import { useSelector } from 'react-redux';
import { View, StatusBar, ScrollView } from 'react-native';
import styles from '@/assets/styles/index.jsx';
import { WhiteSpace } from '@ant-design/react-native';

import ServiceCardUnclickable from '@/components/ServiceCardUnclickable.jsx';

export default function Services() {
  const allServices = useSelector((state) => state.services.storeServices);

  const services = allServices.map((service) => (
    <ServiceCardUnclickable service={service} key={service.id} />
  ));

  return (
    <ScrollView style={styles.generalScreensContainer}>
      <StatusBar backgroundColor="#052D4C" />
      <WhiteSpace size="md" />
      <View style={styles.servicesView}>{services}</View>
    </ScrollView>
  );
}
