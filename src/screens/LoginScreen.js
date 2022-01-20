import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { BlurView } from 'expo-blur';

import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function LoginScreen() {
  const authStatus = useSelector((state) => state.auth.authenticated);

  return (
    <ImageBackground
      source={require('../../assets/eiffel.jpg')}
      resizeMode='cover'
      style={styles.bgImage}>
      <BlurView intensity={90} tint='dark' style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}> TOURZIO</Text>
          <Text style={styles.slogan}> We stay for you </Text>
        </View>

        <TextInput
          style={styles.TextInput}
          placeholderTextColor='white'
          //underlineColorAndroid='green'
          placeholder='EMAIL ADRESS OR MOBILE NUMBER'
        />
        <Text></Text>

        <TextInput
          style={styles.TextInput}
          placeholderTextColor='white'
          secureTextEntry={true}
          //underlineColorAndroid='green'
          placeholder='PASSWORD'
        />
        <Text></Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: height * 0.05,
            width: width * 0.85,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'right',
              fontFamily: 'roboto',
              color: 'gray',
            }}>
            FORGOT PASSWORD?
          </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontFamily: 'roboto',
              fontSize: 20,
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: width * 0.85,
            height: height * 0.1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
            OR
          </Text>
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    //backgroundColor: 'rgba(64, 64, 64, 0.6)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bgImage: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  titleArea: {
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'red'

    //backgroundColor:'rgba(164, 164, 164, 0.5)'
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 18,
    textAlign: 'center',
    color: 'black',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontFamily: 'space',
  },
  slogan: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    color: 'white',
    fontFamily: 'roboto',
  },
  TextInput: {
    width: width * 0.85,
    height: height * 0.1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    paddingLeft: 20,
    textAlign: 'left',
    color: 'white',
    fontSize: 15,
  },
  loginBtn: {
    width: width * 0.85,
    height: height * 0.1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.85)',
  },
});
