import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import antOutlineFont from '@ant-design/icons-react-native/fonts/antoutline.ttf';
import antFillFont from '@ant-design/icons-react-native/fonts/antfill.ttf';
import { Provider } from 'react-redux';
import store from '@/store';
import { robotoFont, robotoItalicFont, robotoBoldFont } from '@/assets';
import setupLocalization from './src/locales';
import MainNavigator from './src/navigators/MainNavigator.jsx';

setupLocalization();

export default function App() {
  const [fontsLoaded] = useFonts({
    antoutline: antOutlineFont,
    antfill: antFillFont,
    roboto: robotoFont,
    robotoItalic: robotoItalicFont,
    robotoBold: robotoBoldFont,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Provider store={store}><MainNavigator /></Provider>;
}
