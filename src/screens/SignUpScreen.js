import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { BlurView } from 'expo-blur';
import { auth } from '../../firebase';


import LoginWithBtn from '../components/LoginWithBtn';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0;

export default function SignUpScreen({ navigation }) {
  const [keyboardActive, setKeyboardActive] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    if (Object.keys(firstName).length === 0) {
      console.log('name_0');
    } else if (name === null) {
      console.log('name_null', firstName);
    } else {
      console.log('name_else', firstName);
    }
  });

  return (
    <ImageBackground
      source={require('../../assets/eiffel.jpg')}
      resizeMode='cover'
      style={styles.bgImage}>
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={keyboardVerticalOffset}
        enabled={keyboardActive}
        style={{}}>
        <BlurView intensity={90} tint='dark' style={styles.container}>
          <View style={styles.titleArea}>
            <Text style={styles.title}> TOURZIO</Text>
            <Text style={styles.slogan}> We stay for you </Text>
          </View>

          <View
            style={{
              width: width * 0.85,
              height: height * 0.09,
              flexDirection: 'row',
              justifyContent: 'space-between',
              //backgroundColor: 'red',
            }}>
            <TextInput
              style={styles.TextInputSmall}
              placeholderTextColor='white'
              autoCapitalize={'words'}
              keyboardType={'ascii-capable'}
              returnKeyType='next'
              placeholder='FIRST NAME'
              onPressIn={() => {
                setKeyboardActive(false);
              }}
            />
            <TextInput
              style={styles.TextInputSmall}
              placeholderTextColor='white'
              autoCapitalize={'words'}
              returnKeyType='next'
              placeholder='LAST NAME'
              onPressIn={() => {
                setKeyboardActive(false);
              }}
            />
          </View>
          <Text></Text>

          <TextInput
            style={styles.TextInput}
            placeholderTextColor='white'
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder='EMAIL ADRESS'
            value={email}
            onChangeText={(text) => setEmail(text)}
            onPressIn={() => {
              setKeyboardActive(false);
            }}
          />
          <Text></Text>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor='white'
            keyboardType={'phone-pad'}
            maxLength={10}
            placeholder='MOBILE NUMBER'
            onPressIn={() => {
              setKeyboardActive(false);
            }}
          />
          <Text></Text>

          <TextInput
            style={styles.TextInput}
            placeholderTextColor='white'
            secureTextEntry={true}
            //underlineColorAndroid='green'
            placeholder='PASSWORD'
            value={password}
            onChangeText={(text) => setPassword(text)}
            onPressIn={() => {
              setKeyboardActive(true);
            }}
          />
          <Text></Text>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor='white'
            secureTextEntry={true}
            //underlineColorAndroid='green'
            placeholder='CONFIRM PASSWORD'
            onPressIn={() => {
              setKeyboardActive(true);
            }}
          />
          <Text></Text>

          <TouchableOpacity 
           onPress={handleSignUp}
          activeOpacity={0.5} style={styles.loginBtn}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',

                fontSize: 14,
              }}>
              REGISTER
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text></Text>
            <View style={{ width: width * 0.81, justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontWeight: '800',
                  textAlign: 'center',
                }}>
                By clicking Register, you accept our Terms of Use and Privacy
                Policy
              </Text>
            </View>
            <Text></Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 13, color: 'white', fontWeight: '800' }}>
                Already have an Account? {''}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                  style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 5,
    color: 'white',
    fontSize: 13,
  },
  TextInputSmall: {
    width: width * 0.4,
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
