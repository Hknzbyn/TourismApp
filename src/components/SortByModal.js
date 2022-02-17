import React, { useState, useEffect } from 'react';
import Checkbox from 'expo-checkbox';

import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
export default function SortByModal(props) {
  const [isChecked, setChecked] = useState(false);

  const {
    modalVisible,
    openModal,
    closeModal,
    NoTripValue,
    changeNoTripValue,
    AscendingValue,
    changeAscendingValue,
    DescendingValue,
    changeDescendingValue,
    RelevanceValue,
    changeRelavenceValue,
  } = props;

  const SortBy = ({ sortByName, onPress, value, onValueChange }) => {
    return (
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1.0 }]}
        onPress={onPress}>
        <View style={styles.SortBy}>
          <View
            style={{
              height: 30,
              width: 250,
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 20,
            }}>
            <Text>{sortByName}</Text>
          </View>

          <View
            style={{
              height: 25,
              width: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Checkbox
              style={{ borderColor: 'rgba(17,182,25, 0.9)' }}
              value={value}
              onValueChange={onValueChange}
              color={value ? 'rgba(17,182,25, 1)' : undefined}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='none'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTopArea}>
              <Text style={styles.modalText}>Sort By</Text>
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1.0 }]}
                onPress={closeModal}>
                <View
                  style={{
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Ionicons name='close' size={35} color='black' />
                </View>
              </Pressable>
            </View>
            <View style={styles.sortByArea}>
              <SortBy
                sortByName='No of Trips'
                onPress={changeNoTripValue}
                value={NoTripValue}
                onValueChange={changeNoTripValue}
              />
              <SortBy
                sortByName='Price Low to High'
                onPress={changeAscendingValue}
                value={AscendingValue}
                onValueChange={changeAscendingValue}
              />
              <SortBy
                sortByName='Price High to Lower'
                onPress={changeDescendingValue}
                value={DescendingValue}
                onValueChange={changeDescendingValue}
              />
              <SortBy
                sortByName='Relevance'
                onPress={changeRelavenceValue}
                value={RelevanceValue}
                onValueChange={changeRelavenceValue}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 2 - 300 / 2,
    marginHorizontal: width / 2 - 300 / 2,
  },
  modalView: {
    height: 275,
    width: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.25,
    paddingVertical: 5,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    fontWeight: '500',
  },
  SortBy: {
    height: 40,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //borderBottomWidth: 0.9,

    // borderBottomColor: '#e6e6e6',
  },

  modalTopArea: {
    height: 50,
    width: 300,
    //backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortByArea: {
    height: 200,
    width: 300,
    //backgroundColor:'gray',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
});
