import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function BottomSheetView(props) {
  const BswHeight = props.BswHeight || 500;
  const bgColor = props.backgroundColor || 'gray'
  // bsw  - BottomSheetView
  const status = props.status || false;
  //const [bswStatus, setBswStatus] = useState(false);
  const sheetRef = React.useRef(null);

  useEffect(() => {
    if (status === true) {
      sheetRef.current.snapTo(0);
    } else {
    }
  }, [status]);
  const openBsw = () => {};

  const renderBottomSheetView = () => (
    <View
      style={{
        backgroundColor: bgColor,
        padding: 10,
        height: BswHeight,
      }}>
      {props.children}
    </View>
  );

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[BswHeight, 50, 0]}
        borderRadius={10}
        renderContent={renderBottomSheetView}
        onCloseStart={props.onClose}
        enabledBottomInitialAnimation={false}
      />
    </>
  );
}
