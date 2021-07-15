import { StyleSheet } from 'react-native';

const eventsStyles = StyleSheet.create({
// Event Card (landing and events screen)
  eventPagination: {
    position: 'absolute',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 0,
  },
  eventsView: {
    flex: 1,
  },
  eventCard: {
    marginHorizontal: 18,
    backgroundColor: '#FFFFFF',
  },
  eventThumbIcon: {
    width: 30,
    height: 30,
  },
  eventContent: {
    justifyContent: 'center',
  },
  eventCardText: {
    marginHorizontal: 16,
    fontFamily: 'roboto',
  },
  eventWarning: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventWarningText: {
    fontSize: 20,
  },
});

export default eventsStyles;
