import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

import useDeviceRegistration from '@/hooks/useDeviceRegistration';

import navStyles from '@/assets/styles/navigation';
import Logo from '@/assets/ArcoprimeLogo.png';

import LogoutButton from '@/components/LogoutButton.jsx';
import DrawerButton from '@/components/DrawerButton.jsx';

import Landing from '@/views/Landing.jsx';
import Events from '@/views/Events.jsx';
import OneEvent from '@/views/OneEvent.jsx';
import Services from '@/views/Services.jsx';
import Kpis from '@/views/Kpis.jsx';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AdministratorDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerPosition="right"
      drawerContent={({ state, navigation, descriptors }) => (
        <LogoutButton
          state={state}
          navigation={navigation}
          descriptors={descriptors}
        />
      )}
    >
      <Drawer.Screen name="Inicio" component={Landing} />
      <Drawer.Screen name="Eventos" component={Events} />
    </Drawer.Navigator>
  );
}

const options = ({ navigation }) => ({
  headerTitleAlign: 'center',
  headerStyle: navStyles.headerApp,
  headerTintColor: '#FFFFFF',
  headerTitleStyle: navStyles.headerTitleMain,
  headerRight: () => <DrawerButton navigation={navigation} />,
  headerTitle: () => <Image source={Logo} style={navStyles.headerLogo} />,
});

const options2 = () => ({
  headerTitleAlign: 'center',
  headerStyle: navStyles.headerApp,
  headerTintColor: '#FFFFFF',
  headerTitleStyle: navStyles.headerTitle,
});

export default function AdministratorNavigator() {
  useDeviceRegistration();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ArcoPrime">
        <Stack.Screen
          name=" "
          component={AdministratorDrawerNavigator}
          options={options}
        />
        <Stack.Screen name="Evento" component={OneEvent} options={options2} />
        <Stack.Screen
          name="Servicios"
          component={Services}
          options={options2}
        />
        <Stack.Screen name="Kpis" component={Kpis} options={options2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
