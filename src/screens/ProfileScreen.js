import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
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
