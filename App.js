import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from 'react-native-safe-area-context';

//Navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import FavoritesScreen from './src/screens/FavoritesScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import TripScreen from './src/screens/TripScreen';
import TryScreen from './src/screens/TryScreen';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { AuthOffStack } from './src/navigation/StackNavigator';

// Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useDispatch, useSelector } from 'react-redux';

import * as Font from 'expo-font';

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      space: require('./assets/fonts/spaceage.ttf'),
      //roboto: require('./assets/fonts/Roboto-Light.ttf'),
    });
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <AppWrapper />
      </SafeAreaView>
    </Provider>
  );
}

const AppWrapper = () => {
  const authStatus = useSelector((state) => state.auth.authenticated);

  return (
    <NavigationContainer>
      {authStatus === false ? <DrawerNavigator /> : <AuthOffStack />}
    </NavigationContainer>
  );
  //  return (
  //     <NavigationContainer>
  //             {authStatus ? <DrawerNavigator /> : <AuthOffStack />}
  //     </NavigationContainer>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
