import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import BottomSheetView from '../components/BottomSheetView';

export default function TripScreen({ navigation }) {
  const [bswStatus, setBswStatus] = useState(false);
  useEffect(() => {}, [bswStatus]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{bswStatus ? 'true' : 'false'}</Text>
      <Text> </Text>
      <Text onPress={() => setBswStatus(true)} style={styles.text}>
        Open bsw
      </Text>
      <Text>{''}</Text>

      <Text onPress={() => setBswStatus(false)} style={styles.text}>
        Close bsw
      </Text>

      <BottomSheetView
        BswHeight={600}
        status={bswStatus}
        backgroundColor={'orange'}
        onClose={() => setBswStatus(false)}>

        <View style={{}}>
          <Text>BBB</Text>
        </View>

      </BottomSheetView>
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
