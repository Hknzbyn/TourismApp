import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './TabNavigator';

import {
  HomeStack,
  TripStack,
  SearchStack,
  FavoritesStack,
  ProfileStack,
  TryStack,
} from './StackNavigator';

const Drawer = createDrawerNavigator();

//ToDo add Drawer screens
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={BottomTabNavigator} />
      <Drawer.Screen name='Contact' component={TryStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
