import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//redux
import * as actionTypes from '../redux/actions/actionTypes';
import { useDispatch, useSelector } from 'react-redux';


export default function HomeScreen() {
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.authenticated);

  const out = () => {
    dispatch({
      type: actionTypes.SET_UNAUTHENTICATED,
      //payload: (authStatus = true),
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreeeeen</Text>

      <Text onPress={out} style={{fontSize:25, color:'black'}}>Out</Text>
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
