import { StyleSheet } from 'react-native';

const alertsStyles = StyleSheet.create({
  // alert Card (landing and alerts screen)
  alertPagination: {
    position: 'absolute',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 0,
  },
  alertsView: {
    flex: 1,
  },
  alertCard: {
    marginHorizontal: 18,
    backgroundColor: '#FFFFFF',
  },
  alertThumbIcon: {
    width: 30,
    height: 30,
  },
  alertContent: {
    justifyContent: 'center',
  },
  alertCardText: {
    marginHorizontal: 16,
    fontFamily: 'roboto',
  },
  alertWarning: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertWarningText: {
    fontSize: 20,
  },
});

export default alertsStyles;
