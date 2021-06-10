import React from 'react';
import { useSelector } from 'react-redux';
import { View, StatusBar } from 'react-native';
import ServiceCardUnclickable from '@/components/ServiceCardUnclickable.jsx';
import ScreenContainer from '@/components/containers/VerticallyCenteredScreenContainer.jsx';
import styles from '@/assets/styles/index.jsx';
import { WhiteSpace } from '@ant-design/react-native';

export default function OneEvent() {
  const allServices = useSelector((state) => state.services.storeServices);
  const services1 = allServices
    .slice(0, allServices.length - 5)
    .map((service) => (
      <ServiceCardUnclickable service={service} key={service.id} />
    ));
  const services2 = allServices
    .slice(2, allServices.length - 3)
    .map((service) => (
      <ServiceCardUnclickable service={service} key={service.id} />
    ));
  const services3 = allServices
    .slice(4, allServices.length - 1)
    .map((service) => (
      <ServiceCardUnclickable service={service} key={service.id} />
    ));

  return (
    <ScreenContainer>
      <StatusBar backgroundColor="#052D4C" />
      <View>
        <View style={styles.servicesView}>{services1}</View>
        <View style={styles.servicesView}>{services2}</View>
        <View style={styles.servicesView}>{services3}</View>
      </View>
      <WhiteSpace size="md" />
    </ScreenContainer>
  );
}
