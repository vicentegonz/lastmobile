import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ServiceCard from '@/components/ServiceCard.jsx';
import ServiceCardUnclickable from '@/components/ServiceCardUnclickable.jsx';

import styles from '@/assets/styles/index';

export default function ServiceContainer() {
  const navigation = useNavigation();

  const mainService = useSelector((state) => state.services.mainService);
  const npsService = useSelector((state) => state.services.npsService);

  return (
    <View>
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
            <ServiceCardUnclickable service={npsService} key={npsService.id} />
          </ScrollView>
        )}
    </View>
  );
}
