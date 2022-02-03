import React, { useState, useEffect } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Ionicons, Fontisto } from '@expo/vector-icons';

export default function SearchBar(props) {
  const [dataSource] = useState([
    'apple',
    'banana',
    'cow',
    'dex',
    'zee',
    'orange',
    'air',
    'bottle',
  ]);

  const [filtered, setFiltered] = useState(dataSource);
  const [searching, setSearching] = useState(false);

  const SearchDropDown = (dataSource) => {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.containerDropDown}>
        <View style={styles.subContainer}>
          {dataSource.length ? (
            dataSource.map((item) => {
              return (
                <View style={styles.itemView}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              );
            })
          ) : (
            <View style={styles.noResultView}>
              <Text style={styles.noResultText}>No search items matched</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  return (
    <View>
      <View activeOpacity={0.9} style={styles.search}>
        <TextInput
          style={styles.TextInput}
          placeholder='Find your Destinations'
          placeholderTextColor='rgba(45, 48, 44, 0.4)'
          autoCapitalize={'none'}
          //value={location}
          onChangeText={onSearch}
        />
        <View style={{ paddingRight: 20 }}>
          <Fontisto name='search' size={22} color='rgba(45, 48, 44, 0.4)' />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>
          {' '}
          List of data
        </Text>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {dataSource.map((item, index) => {
            return (
              <View
                style={{
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 80,
                  width: 80,
                }}>
                <Text style={{ fontSize: 15 }}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* your components can stay here like anything */}
      {/* and at the end of view */}
      {searching && (
        <SearchDropDown
          onPress={() => setSearching(false)}
          dataSource={filtered}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    position: 'absolute',
    // justifyContent: 'center',
    alignItems: 'center',
    //marginTop: '20%',
    flex: 1,
  },
  TextInput: {
    width: width * 0.85,
    height: height * 0.06,
    //borderWidth: 1,
    //borderColor: 'red',
    //borderRadius: 4,
    paddingLeft: 20,
    textAlign: 'left',
    color: 'gray',
    fontWeight: 'normal',
    fontSize: 13,
  },
  containerDropDown: {
    position: 'absolute',
    top: height * 0.06,
    width: width * 0.95,
  },
  subContainer: {
    backgroundColor: 'red',
    paddingTop: 5,
    marginHorizontal: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  itemView: {
    // marginHorizontal: '10%',
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 4,
  },
  itemText: {
    color: 'black',
    paddingHorizontal: 10,
  },
  noResultView: {
    alignSelf: 'center',
    // margin: 20,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  noResultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  search: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.06,
    width: width * 0.95,
    borderRadius: 100,
  },
});
