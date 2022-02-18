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

  useEffect(() => {}), [navigation];
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }} edges={['bottom']}>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            position: 'absolute',
            height: 50,
            justifyContent: 'space-around',
            borderTopWidth: 2,
            borderTopColor: 'black',
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color = focused ? 'black' : 'gray';
            if (route.name === 'HomeScreen') {
              iconName = 'ios-home';

              return <Ionicons name={iconName} size={23} color={color} />;
            } else if (route.name === 'TripScreen') {
              iconName = 'star';

              return <AntDesign name={iconName} size={24} color={color} />;
            } else if (route.name === 'FavoritesScreen') {
              iconName = 'md-heart';

              return <Ionicons name={iconName} size={25} color={color} />;
            } else if (route.name === 'ProfileScreen') {
              iconName = 'user';

              return <FontAwesome name={iconName} size={24} color={color} />;
            } else if (route.name === 'SearchScreen') {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('SearchScreen')}
                  activeOpacity={0.9}
                  style={{
                    //alignSelf: 'baseline',
                    position: 'relative',
                    height: 45,
                    width: 45,
                    borderRadius: 45 / 2,
                    borderWidth: 3,
                    borderColor: 'black',
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Ionicons name='ios-search-sharp' size={25} color='white' />
                </TouchableOpacity>
              );
            }
          },

          tabBarLabel: ({ focused }) => {
            let titleStyle = {
              fontSize: 12,
              fontWeight: focused ? 'bold' : '500',
              color: focused ? 'black' : 'gray',
            };
            if (route.name === 'HomeScreen') {
              return <Text style={titleStyle}>Home</Text>;
            } else if (route.name === 'TripScreen') {
              return <Text style={titleStyle}>Trip</Text>;
            } else if (route.name === 'FavoritesScreen') {
              return <Text style={titleStyle}>Favorites</Text>;
            } else if (route.name === 'ProfileScreen') {
              return <Text style={titleStyle}>Profile</Text>;
            } else if (route.name === 'SearchScreen') {
              return;
            }
          },
        })}>
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
        <Tab.Screen name='ProfileScreen' component={ProfileStack} 
         options={({ route }) => ({
          tabBarVisible: ((route) => {
            if (route.name === 'ProfileScreen') {
              return false;
            }

            return true;
          })(route),
        })}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabNavigator;
