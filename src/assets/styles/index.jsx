import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'roboto',
  },
  titleBG: {
    fontFamily: 'robotoBold',
    fontSize: 35,
  },
  menuButtom: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    fontFamily: 'roboto',
  },
  headerApp: {
    height: 80,
    backgroundColor: '#05426F',
  },
  cardContainer: {
    marginHorizontal: 18,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    padding: 0,
  },
  thumbIcon: {
    width: 30,
    height: 30,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardText: {
    marginHorizontal: 16,
    fontFamily: 'roboto',
  },
  landingSubTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 11,
  },
  kpiCardContainer: {
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 38,
  },
  kpiCardBody: {
    paddingVertical: 0,
  },
  kpiCardValue: {
    fontFamily: 'robotoBold',
    alignSelf: 'center',
    fontSize: 30,
  },
  kpiDifferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  landingView: {
    flex: 1,
    backgroundColor: '#eaedf5',
  },
  landingHorizontalViewKPI: {
    marginHorizontal: 8,
    backgroundColor: '#eaedf5',
  },
  landingHorizontalViewService: {
    flex: 0.55,
    marginHorizontal: 18,
  },
  landingSubTitleService: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
  },
  landingScrollView: {
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  landingScrollViewChild: {
    flexDirection: 'row',
  },
  landingEventsTitle: {
    fontFamily: 'robotoBold',
    fontSize: 20,
    backgroundColor: '#eaedf5',
    marginLeft: 20,
  },
  loginLogo: {
    width: 300,
    height: 100,
    marginBottom: 50,
  },
  headerLogo: {
    width: 180,
    height: 100,
    alignContent: 'center',
  },
  servicesView: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  service: {
    flex: 1,
    marginHorizontal: 5,
    width: (Dimensions.get('window').width - 20) / 2,
    textAlignVertical: 'center',
  },
  serviceCardContainer: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 38,
    textAlignVertical: 'center',
  },
  serviceCardText: {
    marginLeft: 120,
    fontFamily: 'robotoBold',
    flexDirection: 'column',
    fontSize: 30,
  },
  serviceCardUnclickText: {
    marginLeft: 60,
    fontFamily: 'robotoBold',
    flexDirection: 'column',
    fontSize: 25,
  },
});

export default styles;
