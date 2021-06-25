import { StyleSheet, Dimensions } from 'react-native';

const servicesStyles = StyleSheet.create({
  service: {
    width: Dimensions.get('window').width - 36,
  },
  serviceBody: {
    paddingVertical: 0,
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 38,
    textAlignVertical: 'center',
  },
  serviceCardGraphText: {
    fontFamily: 'robotoBold',
    fontSize: 30,
    padding: 15,
    alignSelf: 'center',
  },
  servicesDifferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  // Services View(6)
  servicesView: {
    marginHorizontal: 18,
  },
  // Main service (landing)
  mainServiceCard: {
    justifyContent: 'center',
  },
  mainServiceBody: {
    paddingVertical: 0,
  },
  mainServiceValue: {
    fontFamily: 'robotoBold',
    fontSize: 30,
    alignSelf: 'center',
  },
  mainServiceDifferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  cardView: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 0,
  },
  cardTextView: {
    flexDirection: 'row',
    marginLeft: 0,
  },
});

export default servicesStyles;
