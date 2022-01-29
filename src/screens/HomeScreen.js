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
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'purple',
      }}>
      <View
        style={{
          height: 455,
          width: 140,
          rotation: -14,
          borderRadius: 25,
          backgroundColor: 'gray',
          position: 'absolute',
          top: -125,
          left: 150,
          transform: [{ scaleX: 4 }],
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/santorini.jpg')}
          resizeMode='center'
          style={{ height: 455 ,rotation: 14,}}
        />
        {/* <ImageBackground
        source={require('../../assets/santorini.jpg')}
        resizeMode={'contain'}
        >


        </ImageBackground> */}
      </View>
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
