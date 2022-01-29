import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function SearchScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#289d75',
      }}>
      <View
        style={{
          height: 230,
          width: 230,
          borderRadius: 180,
          backgroundColor: '#3bb77b',
          position: 'absolute',
          top: -150,
          left: -20,
          transform: [{ scaleX: 2 }],
        }}
      />

      <View
        style={{
          height: 400,
          width: 220,
          borderRadius: 175,
          backgroundColor: '#38e892',
          position: 'absolute',
          top: -150,
          left: -20,
          transform: [{ scaleX: 5 }],
        }}
      />

      <Text
        style={{
          position: 'absolute',
          top: 30,
          left: 30,
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
