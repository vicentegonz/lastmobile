import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { WhiteSpace, Pagination } from '@ant-design/react-native';
import EventCard from '@/components/EventCard.jsx';
import { incrementByAmount } from '@/store/eventSlice';
import eventsStyles from '@/assets/styles/events';

export default function Events() {
  const dispatch = useDispatch();
  const Currentpage = useSelector((state) => state.event.page);
  const totalPages = useSelector((state) => state.event.totalPages);
  const pageEvents = useSelector((state) => state.event.pageEvents);

  const locale = {
    prevText: '<',
    nextText: '>',
  };

  const events = pageEvents.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return (
    <View style={eventsStyles.eventsView}>
      <StatusBar backgroundColor="#052D4C" />

      <WhiteSpace size="md" />
      {events.length > 0 ? (
        <View>{events}</View>
      ) : (
        <View style={eventsStyles.eventWarning}>
          <Text style={eventsStyles.eventWarningText}>No hay eventos para mostrar.</Text>
        </View>

      )}
      <WhiteSpace size="md" />
      {events.length > 0 ? (
        <View style={eventsStyles.eventPagination}>
          <Pagination
            total={totalPages}
            locale={locale}
            current={Currentpage}
            onChange={(page) => {
              dispatch(incrementByAmount(page));
            }}
            responsive
          />
          <WhiteSpace size="sm" />
        </View>
      ) : null}
    </View>
  );
}
