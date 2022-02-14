import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Pressable
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function BottomTabContent(props) {

  const homeIcon = <Ionicons name='ios-home' size={23} color={color} />;
  const tripIcon = <AntDesign name='star' size={23} color={color} />;
  const searchIcon =<Ionicons name='ios-search-sharp' size={33} color='white'/>
  const favoritesIcon = <Ionicons name='md-heart' size={23} color={color} />;
  const profileIcon = <FontAwesome name='user' size={23} color={color} />;

  const { item, onPress, accessibilityState } = props;
  //const focused = accessibilityState.selected;
  console.log('stateeee..', props);
  const viewRef = useRef(null);

 

  // const isFocused = props.navigation.isFocused(props.state.index);
  // console.log(isFocused);
  const color = 'purple';

  const Tab = ({ onPress, pageName, icon }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.tabArea}>
        <View style={styles.tabIcon}>{icon}</View>
        <View style={styles.tabName}>
          <Text style={styles.tabText}>{pageName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SearchTab = ({ onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}

        activeOpacity={0.9}
        style={{
          position: 'relative',
          height: 90,
          width: 90,
          borderRadius: 45,
          top: -7,
          borderWidth: 3,
          borderColor: 'black',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 35,

            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name='ios-search-sharp' size={31} color='white' />
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
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Tab
          pageName={'Home'}
          icon={homeIcon}
          onPress={() => props.navigation.navigate('HomeScreen')}
        />
        <Tab
          pageName={'Trip'}
          icon={tripIcon}
          onPress={() => props.navigation.navigate('TripScreen')}
        />
        <SearchTab onPress={() => props.navigation.navigate('SearchScreen')} />
        <Tab
          pageName={'Favorites'}
          icon={favoritesIcon}
          onPress={() => props.navigation.navigate('FavoritesScreen')}
        />

        <Tab
          pageName={'Profile'}
          icon={profileIcon}
          onPress={() => props.navigation.navigate('ProfileScreen')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1.5,
    borderTopColor: 'black',
  },
  tabArea: {
    height: height * 0.09,
    width: height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    //backgroundColor: 'red',
  },
  tabIcon: {},
  tabName: {},
  tabText: {
    fontSize: 10,
    fontWeight: 'bold',
    color:'white',
  },
});
