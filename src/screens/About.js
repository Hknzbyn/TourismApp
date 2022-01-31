import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
    }}>
   
    <View
      style={{
        height: 400,
        width: 250,
        borderRadius: 125,
        backgroundColor: '#38e892',
        position: 'absolute',
        top: -75,
        left: -20,
        transform: [{ scaleX: 3 }],
      }}
    />
    

    
  </View>
  );
}
