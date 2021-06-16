import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  // Login
  loginLogo: {
    width: 300,
    height: 100,
    marginBottom: 50,
  },
  // Admin Navigator
  headerApp: {
    height: 80,
    backgroundColor: '#05426F',
  },
  headerTitleMain: {
    fontSize: 35,
    fontFamily: 'robotoBold',
  },
  headerLogo: {
    width: 180,
    height: 100,
    alignContent: 'center',
  },
  headerTitle: {
    fontFamily: 'robotoBold',
    fontSize: 35,
  },
  // Drawer Button
  menuButtom: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    fontFamily: 'roboto',
  },
  drawerIcon: {
    padding: 0,
  },
  // Landing
  landingView: {
    flex: 1,
    backgroundColor: '#eaedf5',
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
    marginHorizontal: 18,
  },
  serviceTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
  },
  eventsTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 20,
  },
  // Main Kpi Card (landing)
  mainKpiContainer: {
    marginHorizontal: 10,
    paddingBottom: 0,
  },
  mainKpiCard: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 90,
  },
  mainKpiDifferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  // More Information
  moreInformation: {
    color: '#05426F',
    alignSelf: 'flex-end',
  },
  // Main Kpi Value (landing and category)
  KpiValue: {
    fontFamily: 'robotoBold',
    alignSelf: 'center',
    fontSize: 30,
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
  // Event Card (landing and events screen)
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
  // General Screen Container
  generalScreensContainer: {
    backgroundColor: '#eaedf5',
  },

  // Kpi View (by category)
  categoryKpiCard: {
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 38,
    alignSelf: 'center',
    paddingBottom: 0,
  },
  categoryKpiDifferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  // Services View(6)
  servicesView: {
    marginHorizontal: 18,
  },
  // Services specific cards
  service: {
    width: Dimensions.get('window').width - 36,
  },
  serviceBody: {
    paddingVertical: 0,
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 38,
    textAlignVertical: 'center',
  },
  serviceValue: {
    fontFamily: 'robotoBold',
    alignSelf: 'center',
    fontSize: 30,
  },
  servicesDifferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  // Kpi category
  kpiCategoryTop: {
    marginHorizontal: 22,
  },
  kpiName: {
    fontFamily: 'robotoBold',
    fontSize: 25,
  },
});

export default styles;
