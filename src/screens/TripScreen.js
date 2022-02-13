import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';

import BottomSheetView from '../components/BottomSheetView';
import Header from '../components/Header';
import BgMaskedImage from '../components/BgMaskedImage';

import SearchBar from '../components/SearchBar';

export default function TripScreen({ navigation }) {
  navigation.setOptions({ tabBarVisible: false });
  const [bswStatus, setBswStatus] = useState(false);
  useEffect(() => {}, [bswStatus]);

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
        leftIconOnPress={() => navigation.navigate('HomeScreen')}
        leftIcon={<Ionicons name='arrow-back-sharp' size={26} color='white' />}
      />

      <Text style={styles.text}>{bswStatus ? 'true' : 'false'}</Text>
      <Text> </Text>
      <Text onPress={() => setBswStatus(true)} style={styles.text}>
        Open bsw
      </Text>

      <BottomSheetView
        BswHeight={600}
        status={bswStatus}
        backgroundColor={'orange'}
        onClose={() => setBswStatus(false)}
      />
      <View
        style={{
          width: width* 0.2,
          height: height * 0.5,
          backgroundColor: 'green',
        }}></View>

      <View
        style={{
          width: width* 0.2,
          height: height * 0.95,
          backgroundColor: 'red',
          position: 'absolute',
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 18,
    textAlign: 'center',
    color: 'black',
  },
});
