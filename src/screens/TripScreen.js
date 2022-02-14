import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  CheckBox,
  Pressable,
  TouchableOpacity,
} from 'react-native';
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

  const TitleBsw = ({ title, clear }) => {
    return (
      <View style={styles.TitleArea}>
        <View>
          <Text style={styles.TitleText}>{title}</Text>
        </View>

        <Pressable onPress={clear}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'rgba(17,17,17, 0.3)',
            }}>
            CLEAR
          </Text>
        </Pressable>
      </View>
    );
  };

  const openedBsw = () => {
    return (
      <View style={styles.openedBsw}>
        <View style={styles.bswTitleArea}>
          <Text style={styles.bswTitle}>Filters</Text>
          <Pressable
            onPress={() => {
              setBswStatus(false);
            }}>
            <Ionicons name='close-outline' size={31} color='white' />
          </Pressable>
        </View>

        <View style={styles.bswBudgetArea}>
          <TitleBsw
            title='Budget (for Person)'
            clear={() => {
              Alert.alert('clearBudget');
            }}
          />
          <View></View>
        </View>
        <View style={styles.bswDurationArea}>
          <TitleBsw
            title='Duration Days'
            clear={() => {
              Alert.alert('Duration Days');
            }}
          />
        </View>
        <View style={styles.bswActivityArea}>
          <TitleBsw
            title='Activity Days'
            clear={() => {
              Alert.alert('Activity Days');
            }}
          />
        </View>

        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyBtnText}>APPLY FILTER</Text>
        </TouchableOpacity>
      </View>
    );
  };

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

      <BottomSheetView
        BswHeight={height * 0.92}
        status={bswStatus}
        onClose={() => setBswStatus(false)}
        onPressSortBy={() => Alert.alert('sortByModal')}
        onPressFilter={() => setBswStatus(true)}>
        {openedBsw()}
      </BottomSheetView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#fff',
    flexDirection: 'column',
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
  openedBsw: {
    height: 600,
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bswTitleArea: {
    height: height * 0.09,
    width: width,
    backgroundColor: 'rgba(17,17,17,0.8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  bswTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'white',
  },
  bswBudgetArea: {
    height: height * 0.35,
    width: width,
    //backgroundColor: 'yellow',
  },
  bswDurationArea: {
    height: height * 0.2,
    width: width,
    //backgroundColor: 'green',
  },
  bswActivityArea: {
    height: height * 0.2,
    width: width,
    //backgroundColor: 'blue',
  },
  applyBtn: {
    marginVertical: 5,
    height: height * 0.07,
    width: width * 0.85,
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17,182,25, 1)',
  },
  applyBtnText:{
    color:'white',
    fontSize: 12,
    fontWeight: 'bold',

  },
  TittleBsw: {
    height: height * 0.02,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  TitleArea: {
    height: height * 0.06,
    width: width,
    elevation: .5,
    flexDirection: 'row',
    backgroundColor: 'rgba(220,220,220,0.5)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  TitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
