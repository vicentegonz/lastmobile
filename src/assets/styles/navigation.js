import { StyleSheet } from 'react-native';

const navStyles = StyleSheet.create({
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
});

export default navStyles;
