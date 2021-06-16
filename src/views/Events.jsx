import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { WhiteSpace } from '@ant-design/react-native';
import styles from '@/assets/styles/index.jsx';

import EventContainer from '@/components/EventContainer.jsx';

export default function Events() {
  const navigation = useNavigation();
  const stores = useSelector((state) => state.profile.stores);

  const events = stores.map((idStore) => (
    <EventContainer navigation={navigation} idStore={idStore} key={idStore} />
  ));

  return (
    <ScrollView style={styles.generalScreensContainer}>
      <StatusBar backgroundColor="#052D4C" />
      <WhiteSpace size="sm" />
      {events}
      <WhiteSpace size="sm" />
    </ScrollView>
  );
}
