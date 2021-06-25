import { StyleSheet, Dimensions } from 'react-native';

const kpiStyles = StyleSheet.create({
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
  // Kpi category
  kpiCategoryTop: {
    marginHorizontal: 22,
  },
  kpiName: {
    fontFamily: 'robotoBold',
    fontSize: 25,
  },
  // Main Kpi Card (landing)
  mainKpiContainer: {
    marginHorizontal: 10,
    paddingBottom: 0,
  },
  mainKpiCard: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 90,
    flexGrow: 1,
  },
  mainKpiDifferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  // Main Kpi Value (landing and category)
  KpiValue: {
    fontFamily: 'robotoBold',
    alignSelf: 'center',
    fontSize: 30,
  },
  categoryText: {
    fontSize: 16,
  },
  mainKpiView: {
    flexDirection: 'row',
  },
});

export default kpiStyles;
