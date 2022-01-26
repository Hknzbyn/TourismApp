import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

//Todo - Search icon not working good
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { borderTopWidth: 2, borderTopColor: 'black' },
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
                //onPress={() => navigation.navigate('SearchScreen')}
                activeOpacity={0.7}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  top: -22,
                  borderWidth: 3,
                  borderColor: 'black',
                  backgroundColor: 'white',
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,

                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Ionicons name='ios-search-sharp' size={33} color='white' />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    Search
                  </Text>
                </View>
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
          } else if (route.name === 'SearchScreen') {
            return <Text>{''}</Text>;
          } else if (route.name === 'FavoritesScreen') {
            return <Text style={titleStyle}>Favorites</Text>;
          } else if (route.name === 'ProfileScreen') {
            return <Text style={titleStyle}>Profile</Text>;
          }
        },
      })}>
      <Tab.Screen name='HomeScreen' component={HomeStack} />
      <Tab.Screen name='TripScreen' component={TripStack} />
      <Tab.Screen name='SearchScreen' component={SearchStack} />
      <Tab.Screen name='FavoritesScreen' component={FavoritesStack} />
      <Tab.Screen name='ProfileScreen' component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;