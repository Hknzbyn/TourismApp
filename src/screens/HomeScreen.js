import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Animated, {
  FadeInUp,
  Easing,
  Layout,
  Transition,
  ZoomIn,
  ZoomOut,
  FadeInDown,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
//redux
import * as actionTypes from '../redux/actions/actionTypes';
import { BlurView } from 'expo-blur';

import firebase from '../../firebase';

import { useDispatch, useSelector } from 'react-redux';
import BgMaskedImage from '../components/BgMaskedImage';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { FlatList } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [scrollEnd, setScrollEnd] = useState(false);
  const [tourTheme, setTourTheme] = useState([]);
  const [trendDestinations, setTrendDestinations] = useState([]);
  const [discountedDestinations, setDiscountedDestinations] = useState([]);

  const authStatus = useSelector((state) => state.auth.authenticated);
  const tours = useSelector((state) => state.data.data);
  const tourThemes = useSelector((state) => state.data.tourThemes);

  useEffect(() => {
    const themes = findThemes(tourThemes, 'ThemeName');
    setTourTheme(themes);

    const trendResult = findTrends(tours);
    setTrendDestinations(trendResult);

    const discountedResult = findDiscounted(tours);
    setDiscountedDestinations(discountedResult);

  }, []);

  const findThemes = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };
  const findTrends = (arr, key) => {
    let data = arr;
    return data.filter((arr) => arr.tourDetail.trending == true);
  };
  const findDiscounted = (arr, key) => {
    let data = arr;
    return data.filter((arr) => arr.tourDetail.specialOffers == true);
  };

  const out = () => {
    dispatch({
      type: actionTypes.SET_UNAUTHENTICATED,
      //payload: (authStatus = true),
    });
  };

  const AreaTitle = ({ firstLine, secondLine, whiteOrNot }) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          height: height * 0.05,
          paddingLeft: 10,
          marginBottom: 10,
        }}>
        <Text
          style={
            whiteOrNot === true
              ? styles.titleFirst_white
              : styles.titleFirst_dark
          }>
          {firstLine}
        </Text>
        <Text
          style={
            whiteOrNot === true
              ? styles.titleSecond_white
              : styles.titleSecond_dark
          }>
          {secondLine}
        </Text>
      </View>
    );
  };

  const renderThemeCardItem = ({ item, key }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.themeCard}>
        <Image
          style={styles.themeCardImageArea}
          source={{ uri: item.ThemeImage }}
        />
        <View style={styles.themeCardTextArea}>
          <Text numberOfLines={1} style={styles.themeCardText}>
            {item.ThemeName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTrendDestinations = ({ item, key }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.trendingDestinationCard}>
        <Image
          style={styles.trendingDestinationCardImageArea}
          source={{ uri: item.tourImage }}
        />
        <View style={styles.trendingDestinationCardTextArea}>
          <Text
            numberOfLines={1}
            style={styles.trendingDestinationCardTitleText}>
            {item.country}
          </Text>
          <View
            style={{
              paddingRight: 5,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text numberOfLines={1} style={styles.trendingDestinationCardText}>
              starting:
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: 'rgba(0, 230, 64, 1)',
                fontSize: 18,
                flexShrink: 1,
                fontWeight: 'bold',
              }}>
              <Text> $</Text>
              {item.price}/person
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderDiscountedDestinations = ({ item, key }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.discountedDestinationCard}>
        <Image
          style={styles.discountedDestinationCardImageArea}
          source={{ uri: item.tourImage }}
        />
        <View style={styles.discountedDestinationCardTextArea}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 240,
              paddingHorizontal: 5,
            }}>
            <Text
              numberOfLines={1}
              style={styles.discountedDestinationCardTitleText}>
              {item.country}
            </Text>
            <Text style={styles.discountedDestinationCardText}>
              last {Math.floor(Math.random() * 23) + 1} hours
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 240,
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                color: 'rgba(207, 0, 15, 1)',
                fontSize: 18,
                flexShrink: 1,
                fontWeight: 'bold',
              }}>
              <Text> $</Text>
              {item.price}
            </Text>

            <Text
              numberOfLines={1}
              style={{
                color: 'rgba(0, 230, 64, 1)',
                fontSize: 18,
                fontWeight: 'bold',

                flexShrink: 1,
              }}>
              <Text> $</Text>
              {(item.price * 90) / 100} /person
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    //console.log('first', scrollPosition);

    if (scrollPosition > 210) {
      setScrollEnd(true); //True__white
    }

    if (scrollPosition < 210) {
      setScrollEnd(false);
    }
  };

  return (
    <View style={styles.container}>
      <BgMaskedImage />
      <Header
        titleStyle={{
          fontSize: 26,
          color: 'white',
          fontFamily: 'space',
        }}
        Title='TOURZIO'
        leftIconOnPress={() => navigation.openDrawer()}
        leftIcon={<Ionicons name='menu-sharp' size={27} color='white' />}
      />
      <View style={styles.searchArea}>
        <SearchBar
          placeholder='Destinations, Themes & Catogories'
          //onChangeText={(text) => searchFilterFunction(text)}
          //value={search}
          //cleanVal={() => setSearch('')}
        />
      </View>

      <ScrollView onScroll={handleScroll} style={styles.scrollArea}>
        <View style={styles.tripThemeArea}>
          <AreaTitle firstLine='TRIP' secondLine='THEMES' whiteOrNot={true} />

          <FlatList
            data={tourTheme}
            keyExtractor={(item) => item.ThemeName}
            renderItem={renderThemeCardItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{}}
          />
        </View>

        <View style={styles.trendingDestinationsArea}>
          <AreaTitle
            firstLine='TRENDING'
            secondLine='DESTINATIONS'
            whiteOrNot={true}
          />

          <FlatList
            data={trendDestinations}
            keyExtractor={(item) => item.tourId}
            renderItem={renderTrendDestinations}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View style={styles.offersArea}>
          <AreaTitle
            firstLine={'SPECIAL'}
            secondLine={'OFFERS'}
            whiteOrNot={scrollEnd ? true : false}
          />
          <FlatList
            data={discountedDestinations}
            keyExtractor={(item) => item.tourId}
            renderItem={renderDiscountedDestinations}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: 10, marginRight: 10 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //height: height,
    width: width,
    //paddingBottom: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 18,
    textAlign: 'center',
    color: 'black',
  },
  bgImage: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  searchArea: {
    height: height * 0.1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  scrollArea: {
    //flex: 1,
    width: width,
    height: height,

    //backgroundColor: 'purple',
  },
  tripThemeArea: {
    height: height * 0.25,
    width: width,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  trendingDestinationsArea: {
    height: height * 0.4,
    width: width,
    justifyContent: 'space-between',
    
    //backgroundColor: 'blue',
  },
  offersArea: {
    height: height * 0.45,
    width: width,
    paddingBottom: height * 0.02,
    //backgroundColor: 'red',
  },
  titleFirst_white: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.4)',
  },
  titleSecond_white: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  titleFirst_dark: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(45, 45, 45, 0.4)',
  },
  titleSecond_dark: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  themeCard: {
    height: 120,
    width: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //marginRight: 10,
    //backgroundColor: 'yellow',
  },
  themeCardImageArea: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    borderWidth: 0.5,
    //backgroundColor: 'purple',
  },
  themeCardTextArea: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  themeCardText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  trendingDestinationCard: {
    height: 225,
    width: 150,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
    marginRight: 20,
    marginBottom: 15,
    position: 'relative',
    backgroundColor: 'white',
  },
  trendingDestinationCardImageArea: {
    height: 160,
    width: 150,
    borderRadius: 15,
    borderWidth: 0.2,
    //backgroundColor:'gray'
  },
  trendingDestinationCardTextArea: {
    width: 140,
    paddingLeft: 10,
    //backgroundColor:'red',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  trendingDestinationCardTitleText: {
    color: 'rgba(45, 48, 44, .9)',

    textAlign: 'left',
    flexShrink: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  trendingDestinationCardText: {
    color: 'rgba(45, 48, 44, 0.4)',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 14,
  },

  discountedDestinationCard: {
    height: 250,
    width: 250,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
    marginRight: 10,
    marginBottom: 15,
    position: 'relative',
    backgroundColor: 'white',
  },
  discountedDestinationCardImageArea: {
    height: 175,
    width: 250,
    borderRadius: 15,
    //backgroundColor: 'red',
  },
  discountedDestinationCardTextArea: {
    width: 245,
    height: 70,

    paddingLeft: 10,
    //backgroundColor:'red',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  discountedDestinationCardTitleText: {
    color: 'rgba(45, 48, 44, .9)',

    textAlign: 'left',
    flexShrink: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  discountedDestinationCardText: {
    color: 'rgba(207, 0, 15, 1)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
