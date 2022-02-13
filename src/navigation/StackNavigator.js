import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

//Screens
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import TripScreen from '../screens/TripScreen';
import AboutScreen from '../screens/AboutScreen';
import TryScreen from '../screens/TryScreen';
import ContactScreen from '../screens/ContactScreen';

//notAuth screens
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const TripStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TripScreen'
        component={TripScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FavoritesScreen'
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const TryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TryScreen'
        component={TryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const DrawerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AboutScreen'
        component={AboutScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name='TryScreen'
        component={TryScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name='ContactScreen'
        component={ContactScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

//User_notAuth screens
const AuthOffStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStack,
  TripStack,
  SearchStack,
  FavoritesStack,
  ProfileStack,
  AuthOffStack,
  TryStack,
  DrawerStack,
};
