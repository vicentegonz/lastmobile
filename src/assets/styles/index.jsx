import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'roboto',
  },
  titleBG: {
    fontWeight: 'bold',
    fontSize: 45,
    fontFamily: 'roboto',
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
    fontSize: 25,
    backgroundColor: '#eaedf5',
    marginLeft: 11,
  },
  kpiCardContainer: {
    flex: 2,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    width: 170,
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  kpiCardText: {
    fontFamily: 'roboto',
    flexDirection: 'column',
    fontSize: 40,
  },
  landingView: {
    flex: 1,
    backgroundColor: '#eaedf5',
  },
  landingHorizontalView: {
    flex: 1.3,
    paddingHorizontal: 9,
    backgroundColor: '#eaedf5',
  },
  landingScrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  landingScrollViewChild: {
    flexDirection: 'row',
    flexGrow: Dimensions.get('window').height / 2,
  },
  landingEvents: {
    flex: 1,
    backgroundColor: '#eaedf5',
  },
  landingEventsTitle: {
    fontFamily: 'robotoBold',
    fontSize: 25,
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
});

export default styles;
