import React from 'react';
import { useSelector } from 'react-redux';
import { View, StatusBar } from 'react-native';
import ServiceCardUnclickable from '@/components/ServiceCardUnclickable.jsx';
import ScreenContainer from '@/components/containers/GeneralScreensContainer.jsx';
import styles from '@/assets/styles/index.jsx';
import { WhiteSpace } from '@ant-design/react-native';

export default function Services() {
  const allServices = useSelector((state) => state.services.storeServices);

  const services = allServices.map((service) => (
    <ServiceCardUnclickable service={service} key={service.id} />
  ));

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <View>
        <View style={styles.servicesView}>{services}</View>
      </View>
      <WhiteSpace size="md" />
    </ScreenContainer>
  );
}
