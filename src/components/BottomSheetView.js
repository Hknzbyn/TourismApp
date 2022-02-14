import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Octicons, FontAwesome5 } from '@expo/vector-icons';
// bsw  - BottomSheetView
export default function BottomSheetView(props) {
  const BswHeight = props.BswHeight || 500;
  const openedBgColor = props.openedBgColor || 'gray';
  const closedBgColor = props.closedBgColor || 'w';

  const status = props.status;
  //const [bswStatus, setBswStatus] = useState(false);
  const sheetRef = React.useRef(null);

  useEffect(() => {
    console.log('status', status);
    if (status === true) {
      sheetRef.current.snapTo(0);
    } else {
      sheetRef.current.snapTo(1);
    }
  }, [status]);
  const openBsw = () => {};

  const renderOpenedBsw = () => {
    return <View>{props.children}</View>;
  };

  const renderClosedBsw = () => (
    <View
      style={{
        backgroundColor: closedBgColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: BswHeight,
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPressSortBy}
        style={{
          flexDirection: 'row',
          height: 65,
          width: width * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor: 'red',
          marginHorizontal: 25,
        }}>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name='sort-amount-down' size={22} color='gray' />
        </View>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: '200' }}>
          Sort By
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.onPressFilter}
        activeOpacity={0.8}
        style={{
          flexDirection: 'row',
          height: 65,
          width: width * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor: 'red',
          marginHorizontal: 25,
        }}>
        <View
          style={{ transform: [{ rotate: '90deg' }], marginHorizontal: 10 }}>
          <Octicons name='settings' size={22} color='gray' />
        </View>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: '200' }}>
          Filter
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[BswHeight, 80]}
        initialSnap={1}
        borderRadius={status === true ? 10 : 0}
        renderContent={status === true ? renderOpenedBsw : renderClosedBsw}
        onCloseStart={props.onClose}
        enabledBottomInitialAnimation={true}
        enabledGestureInteraction={status === true ? true : false}
      />
    </>
  );
}
