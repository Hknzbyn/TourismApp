import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import MaskedView from '@react-native-masked-view/masked-view';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import BgMaskedImage from '../components/BgMaskedImage';
import Header from '../components/Header';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Autocomplete from 'react-native-autocomplete-input';

export default function SearchScreen({ navigation }) {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.data.data);

  const [destinations, setDestinations] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    console.log('location', location);
    const result = FindUniques(tours, 'country');
    setDestinations(result);
  }, [location]);

  const FindUniques = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };

  const renderCardItem = ({ item, key }) => {
    return (
      <ImageBackground
        borderRadius={20}
        resizeMode='cover'
        source={{ uri: item.tourImage }}
        style={styles.card}>
        <View style={styles.card}>
          <View style={{ marginVertical: 5 }}>
            <Text
              style={{
                fontSize: 22,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {item.country}
            </Text>
          </View>
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>
            starting budget
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            <Text>$</Text>
            {item.price}
            <Text style={{ fontWeight: '600' }}>/person</Text>
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <View style={styles.container}>
      <BgMaskedImage />
      <Header
        titleStyle={{ fontWeight: '700', fontSize: 18, color: 'white' }}
        Title={'Destinations'}
        backOnPress={() => navigation.goBack()}
      />
      <View style={styles.searchArea}>
        <View activeOpacity={0.9} style={styles.search}>

          <TextInput
            style={styles.TextInput}
            placeholder='Find your Destinations'
            placeholderTextColor='rgba(45, 48, 44, 0.4)'
            autoCapitalize={'none'}
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
          <View style={{ paddingRight: 20 }}>
            <Fontisto name='search' size={22} color='rgba(45, 48, 44, 0.4)' />
          </View>
        </View>
      </View>

      <View style={styles.destinationsArea}>
        <FlatList
          numColumns={2}
          data={destinations}
          keyExtractor={(item) => item.tourId}
          renderItem={renderCardItem}
          style={{ paddingHorizontal: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  searchArea: {
    height: height * 0.1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  search: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.06,
    width: width * 0.95,
    borderRadius: 250,
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
  destinationsArea: {
    width: width,
    height: height * 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  card: {
    width: width * 0.4,
    height: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 20,
    //elevation: 0.1,
    backgroundColor: 'rgba(17,17,17,0.5)',
  },
});
