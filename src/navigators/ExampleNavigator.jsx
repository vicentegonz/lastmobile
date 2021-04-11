/* eslint-disable react/style-prop-object */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { COLORS } from '@/utils/colors';

import Landing from '@/views/Landing.jsx';
import Example from '@/views/Example.jsx';

const Tab = createBottomTabNavigator();

function getTabBarIconFunction(IconComponent, name) {
  function tabBarIcon({ color }) {
    return (
      <IconComponent
        name={name}
        color={color}
        size={24}
      />
    );
  }

  return tabBarIcon;
}

export default function ExampleNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: COLORS['accent-1'],
          inactiveTintColor: COLORS['light-grey'],
        }}
      >
        <Tab.Screen
          name="Landing"
          component={Landing}
          options={{
            tabBarIcon: getTabBarIconFunction(FontAwesome5, 'rocket'),
          }}
        />
        <Tab.Screen
          name="Example"
          component={Example}
          options={{
            tabBarIcon: getTabBarIconFunction(FontAwesome5, 'vial'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
