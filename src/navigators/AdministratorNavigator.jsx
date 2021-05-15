import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import styles from '@/assets/styles/index.jsx';
import Landing from '@/views/Landing.jsx';
import Shops from '@/views/Shops.jsx';
import Events from '@/views/Events.jsx';
import Contacts from '@/views/Contacts.jsx';
import OneEvent from '@/views/OneEvent.jsx';
import OneShop from '@/views/OneShop.jsx';
import OneContact from '@/views/OneContact.jsx';

import DrawerButton from '@/components/DrawerButton.jsx';

import LogoutButton from '@/components/LogoutButton.jsx';

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
      <Drawer.Screen name="Home" component={Landing} />
      <Drawer.Screen name="Shops" component={Shops} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Contacts" component={Contacts} />
    </Drawer.Navigator>
  );
}

export default function AdministratorNavigator() {
  const options = ({ navigation }) => ({
    headerTitleAlign: 'center',
    headerStyle: styles.headerApp,
    headerTintColor: '#FFFFFF',
    headerTitleStyle: styles.title,
    headerRight: () => <DrawerButton navigation={navigation} />,
  });

  const options2 = () => ({
    headerTitleAlign: 'center',
    headerStyle: styles.headerApp,
    headerTintColor: '#FFFFFF',
    headerTitleStyle: styles.titleBG,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ArcoPrime">
        <Stack.Screen
          name="ArcoPrime"
          component={AdministratorDrawerNavigator}
          options={options}
        />
        <Stack.Screen name="Event" component={OneEvent} options={options2} />
        <Stack.Screen name="Contact" component={OneContact} options={options2} />
        <Stack.Screen name="Shop" component={OneShop} options={options2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
