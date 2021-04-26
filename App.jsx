import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import antOutline from '@ant-design/icons-react-native/fonts/antoutline.ttf';
import antFill from '@ant-design/icons-react-native/fonts/antfill.ttf';
import setupLocalization from './src/locales';
import MainNavigator from './src/navigators/MainNavigator.jsx';

setupLocalization();

export default function App() {
  const [fontsLoaded] = useFonts({
    antoutline: antOutline,
    antfill: antFill,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <MainNavigator />;
}
