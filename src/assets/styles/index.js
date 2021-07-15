import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Landing
  landingView: {
    flex: 3,
    backgroundColor: '#eaedf5',
  },
  landingScroll: {
    flex: 1,
  },
  kpiView: {
    marginHorizontal: 8,
    backgroundColor: '#eaedf5',
  },
  kpiTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 11,
  },
  kpiScroll: {
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  kpiCardsView: {
    flexDirection: 'row',
  },
  serviceView: {
    marginHorizontal: 0,
  },
  serviceTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 18,
  },
  eventsTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 20,
  },
  // General Screen Container
  generalScreensContainer: {
    backgroundColor: '#eaedf5',
  },
  imagen: {
    width: 300,
    height: 100,
  },
  informationIcon: {
    alignSelf: 'flex-end',
  },
  pickerStyle: {
    borderRadius: 0,
    borderColor: '#dddddd',
  },
  pickerContainerStyle: {
    borderColor: '#dddddd',
    borderRadius: 0,
  },
  pickerText: {
    fontFamily: 'roboto',
  },
  // Loading
  loadingView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  // No info
  warningText: {
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 20,
  },
});

export default styles;
