import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
const { width, height } = Dimensions.get('window');

//redux
import * as actionTypes from '../redux/actions/actionTypes';
import { BlurView } from 'expo-blur';

import { useDispatch, useSelector } from 'react-redux';
import BgMaskedImage from '../components/BgMaskedImage';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.authenticated);

  const out = () => {
    dispatch({
      type: actionTypes.SET_UNAUTHENTICATED,
      //payload: (authStatus = true),
    });
  };
  return (
    <View
      style={styles.container}>
        <BgMaskedImage />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: height,
    width: width,
    paddingBottom: 50,
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
});
