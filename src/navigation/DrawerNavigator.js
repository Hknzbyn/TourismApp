import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import {
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');


import BottomTabNavigator from './TabNavigator';

import {
  HomeStack,
  TripStack,
  SearchStack,
  FavoritesStack,
  ProfileStack,
  TryStack,
  DrawerStack,
} from './StackNavigator';

const Drawer = createDrawerNavigator();

//ToDo add Drawer screens
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={BottomTabNavigator} />
      <Drawer.Screen name='Contact' component={DrawerStack} />
      <Drawer.Screen name='About' component={DrawerStack} />
      <Drawer.Screen name='Try' component={TryStack} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
