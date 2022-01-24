import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import axios from 'axios';


export default function TryScreen({ navigation }) {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/properties/get-details',
      params: {
        id: '424023',
        checkIn: '2020-01-08',
        checkOut: '2020-01-15',
        adults1: '1',
        currency: 'TRY',
        locale: 'tr_TR',
      },
      headers: {
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        'x-rapidapi-key': '6dbbb471aamshcf7eebe43763518p140f99jsnc4368ee9afea',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TryScreen</Text>
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
