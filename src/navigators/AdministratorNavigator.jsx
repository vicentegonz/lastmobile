import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

import useDeviceRegistration from '@/hooks/useDeviceRegistration';

import styles from '@/assets/styles/index.jsx';
import Landing from '@/views/Landing.jsx';
import Stores from '@/views/Stores.jsx';
import Events from '@/views/Events.jsx';
import Contacts from '@/views/Contacts.jsx';
import OneEvent from '@/views/OneEvent.jsx';
import OneStore from '@/views/OneStore.jsx';
import OneContact from '@/views/OneContact.jsx';

import DrawerButton from '@/components/DrawerButton.jsx';

import LogoutButton from '@/components/LogoutButton.jsx';

import Logo from '@/assets/ArcoprimeLogo.png';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AdministratorDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContent={({ state, navigation, descriptors }) => (
        <LogoutButton
          state={state}
          navigation={navigation}
          descriptors={descriptors}
        />
      )}
    >
      <Drawer.Screen name="Menu" component={Landing} />
      <Drawer.Screen name="Tiendas" component={Stores} />
      <Drawer.Screen name="Eventos" component={Events} />
      <Drawer.Screen name="Contactos" component={Contacts} />
    </Drawer.Navigator>
  );
}

const options = ({ navigation }) => ({
  headerTitleAlign: 'center',
  headerStyle: styles.headerApp,
  headerTintColor: '#FFFFFF',
  headerTitleStyle: styles.title,
  headerRight: () => <DrawerButton navigation={navigation} />,
  headerTitle: () => <Image source={Logo} style={styles.headerLogo} />,
});

const options2 = () => ({
  headerTitleAlign: 'center',
  headerStyle: styles.headerApp,
  headerTintColor: '#FFFFFF',
  headerTitleStyle: styles.titleBG,
});

export default function AdministratorNavigator() {
  useDeviceRegistration();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ArcoPrime">
        <Stack.Screen
          name="ArcoPrime"
          component={AdministratorDrawerNavigator}
          options={options}
        />
        <Stack.Screen name="Evento" component={OneEvent} options={options2} />
        <Stack.Screen
          name="Contacto"
          component={OneContact}
          options={options2}
        />
        <Stack.Screen name="Tienda" component={OneStore} options={options2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
