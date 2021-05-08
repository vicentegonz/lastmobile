import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Landing from '@/views/Landing.jsx';
import Shops from '@/views/Shops.jsx';
import Events from '@/views/Events.jsx';
import Contacts from '@/views/Contacts.jsx';
import Profile from '@/views/Profile.jsx';
import OneEvent from '@/views/OneEvent.jsx';
import OneShop from '@/views/OneShop.jsx';
import OneContact from '@/views/OneContact.jsx';

import DrawerButton from '@/components/DrawerButton.jsx';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AdministratorDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
      <Drawer.Screen name="Home" component={Landing} />
      <Drawer.Screen name="Shops" component={Shops} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function AdministratorNavigator() {
  const options = ({ navigation }) => ({
    headerTitle: 'ArcoPrime App',
    headerTitleAlign: 'center',
    headerStyle: { height: 100 },
    headerRight: () => <DrawerButton navigation={navigation} />,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ArcoPrime App">
        <Stack.Screen
          name="ArcoPrime App"
          component={AdministratorDrawerNavigator}
          options={options}
        />
        <Stack.Screen name="Event" component={OneEvent} />
        <Stack.Screen name="Contact" component={OneContact} />
        <Stack.Screen name="Shop" component={OneShop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
