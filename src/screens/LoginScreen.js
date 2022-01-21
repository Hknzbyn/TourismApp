import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { BlurView } from 'expo-blur';
import LoginWithBtn from '../components/LoginWithBtn';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

//redux
import * as actionTypes from '../redux/actions/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../../firebase';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.authenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        dispatch({
          type: actionTypes.SET_AUTHENTICATED,
          //payload: (authStatus = true),
        });
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

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
          autoCapitalize={'none'}
          placeholder='EMAIL ADRESS OR MOBILE NUMBER'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text></Text>

        <TextInput
          style={styles.TextInput}
          placeholderTextColor='white'
          secureTextEntry={true}
          placeholder='PASSWORD'
          value={password}
          onChangeText={(text) => setPassword(text)}
          //underlineColorAndroid='green'
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: height * 0.05,
            width: width * 0.85,
            justifyContent: 'center',
            alignItems: 'flex-end',
            //backgroundColor:'red'
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'right',

              color: 'gray',
            }}>
            FORGOT PASSWORD?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.5}
          style={styles.loginBtn}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',

              fontSize: 15,
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
        <Text></Text>

        <View
          style={{
            width: width * 0.85,
            height: height * 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor:'red'
          }}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
            OR
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Login with</Text>
          <View
            style={{ flexDirection: 'row', paddingTop: 25, paddingBottom: 20 }}>
            <LoginWithBtn
              text='FACEBOOK'
              bgcolor='#3b5998'
              icon={<FontAwesome name='facebook-f' size={20} color='white' />}
            />
            <LoginWithBtn
              text='TWITTER'
              bgcolor='#1da1f2'
              icon={<Entypo name='twitter' size={19} color='white' />}
            />
            <LoginWithBtn
              text='GOOGLE+'
              bgcolor='#ea4335'
              icon={<AntDesign name='googleplus' size={21} color='white' />}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 13, color: 'white', fontWeight: '800' }}>
              New to Tourzio? {''}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={{ fontSize: 14, color: 'white', fontWeight: '800' }}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
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
    height: height * 0.2,
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
  },
  TextInput: {
    width: width * 0.85,
    height: height * 0.09,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    paddingLeft: 20,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'normal',
    fontSize: 13,
  },

  loginBtn: {
    width: width * 0.85,
    height: height * 0.07,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.85)',
  },
});
