import React, { useEffect, useState } from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import BottomTabContent from '../components/BottomTabContent';

import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import {
  HomeStack,
  TripStack,
  SearchStack,
  FavoritesStack,
  ProfileStack,
  LoginStack,
  SignUpStack,
  TryStack,
} from './StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

//Todo - Search icon not working good
const BottomTabNavigator = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }} edges={['bottom']}>
      <Tab.Navigator
        initialRouteName='TripScreen'
        tabBar={(props) =>  <BottomTabContent {...props}/>}
     >
        <Tab.Screen name='HomeScreen' component={HomeStack} />
        <Tab.Screen
          name='TripScreen'
          component={TripStack}
          options={({ route }) => ({
            tabBarVisible: ((route) => {
              if (route.name === 'TripScreen') {
                return false;
              }

              return true;
            })(route),
          })}
        />
        <Tab.Screen name='SearchScreen' component={SearchStack} />
        <Tab.Screen name='FavoritesScreen' component={FavoritesStack} />
        <Tab.Screen name='ProfileScreen' component={ProfileStack} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabNavigator;
