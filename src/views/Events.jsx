import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { WhiteSpace, Pagination } from '@ant-design/react-native';
import EventCard from '@/components/EventCard.jsx';
import { incrementByAmount } from '@/store/eventSlice';

export default function Events() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Currentpage = useSelector((state) => state.event.page);
  const totalPages = useSelector((state) => state.event.totalPages);
  const pageEvents = useSelector((state) => state.event.pageEvents);

  const locale = {
    prevText: '<',
    nextText: '>',
  };

  const events = pageEvents.map((event) => (
    <EventCard key={event.id} navigation={navigation} event={event} />
  ));
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#052D4C" />

      <WhiteSpace size="md" />

      <View style={{ flex: 1 }}>{events}</View>
      <Pagination
        style={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
        total={totalPages}
        locale={locale}
        current={Currentpage}
        onChange={(page) => {
          dispatch(incrementByAmount(page));
        }}
        responsive={false}
      />
      <WhiteSpace size="md" />
    </View>
  );
}
