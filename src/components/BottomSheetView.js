import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function BottomSheetView(props) {
  // bsw  - BottomSheetView
  const status = props.status;
  //const [bswStatus, setBswStatus] = useState(false);
  const sheetRef = React.useRef(null);

  useEffect(() => {
    if (status === true) {
      sheetRef.current.snapTo(0);

      return ()=> status===false
    }
  }, [status]);
  const openBsw = () => {
      
  };

  const renderBottomSheetView = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 20,
        height: 540,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[550, 50, 0]}
        borderRadius={10}
        renderContent={renderBottomSheetView}
      />
    </>
  );
}
