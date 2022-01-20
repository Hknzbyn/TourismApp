import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from 'react-native-safe-area-context';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import FavoritesScreen from './src/screens/FavoritesScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';

import TripScreen from './src/screens/TripScreen';
import TryScreen from './src/screens/TryScreen';

// Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useDispatch, useSelector } from 'react-redux';

import * as Font from 'expo-font';

// React Navigation Stacks
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getFonts();
  }, []);

  const getFonts = () => {
    Font.loadAsync({
      space: require('./assets/fonts/spaceage.ttf'),
      roboto: require('./assets/fonts/Roboto-Light.ttf'),
    });
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor='black' style='light' />
        {authenticated === false ? <Auth_off /> : <Auth_on />}
      </SafeAreaView>
    </Provider>
  );
}

const Auth_on = () => {
  const HomeStack = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  };
  const TripStack = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name='TripScreen'
          component={TripScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  };

  const SearchStack = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name='SearchScreen'
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  };
  const FavoritesStack = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name='FavoritesScreen'
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  };
  const ProfileStack = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeStack} />

        <Tab.Screen name='TripScreen' component={TripStack} />
        <Tab.Screen name='SearchScreen' component={SearchStack} />

        <Tab.Screen name='FavoritesScreen' component={FavoritesStack} />
        <Tab.Screen name='ProfileScreen' component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Auth_off = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='LoginScreen'>
        <RootStack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
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
