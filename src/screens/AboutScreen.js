import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import BgMaskedImage from '../components/BgMaskedImage';
import Header from '../components/Header';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
export default function AboutScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <BgMaskedImage />
      <Header
        titleStyle={{
          fontSize: 26,
          color: 'white',
          fontFamily: 'space',
        }}
        leftIconOnPress={() => navigation.goBack()}
        leftIcon={<Ionicons name='arrow-back-sharp' size={26} color='white' />}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          top: 20,
        }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
          ABOUT US
        </Text>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 14,
          }}>
          Mi in nullua posuere soilicitudin aliquam.
        </Text>
      </View>
      <View
        style={{
          height: height * 0.3,
          width: width * 0.9,
          borderRadius: 10,

          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          top: 50,
          paddingVertical:25,
          paddingHorizontal:25,
       }}>
        <Text style={{fontSize:18, textAlign:'auto', fontWeight:'300'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          ipsum at nunc tincidunt porta. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; 
          <Text>
          Donec euismod,
          nisi eget consectetur iaculis, nisl nunc congue nunc, eget euismod
          nunc nisl euismod nunc.
          </Text>
        </Text>
      </View>
    </View>
  );
}
