import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { WhiteSpace, Pagination } from '@ant-design/react-native';
import EventCard from '@/components/EventCard.jsx';
import { incrementByAmount } from '@/store/eventSlice';
import eventsStyles from '@/assets/styles/events';

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
    <View style={eventsStyles.eventsView}>
      <StatusBar backgroundColor="#052D4C" />

      <WhiteSpace size="md" />
      {events}
      <WhiteSpace size="md" />
      <View style={eventsStyles.eventPagination}>
        <Pagination
          style={{}}
          total={totalPages}
          locale={locale}
          current={Currentpage}
          onChange={(page) => {
            dispatch(incrementByAmount(page));
          }}
          responsive
        />
        <WhiteSpace size="lg" />
      </View>

    </View>
  );
}
