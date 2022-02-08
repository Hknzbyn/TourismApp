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
import SearchBar from '../components/SearchBar';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default function SearchScreen({ navigation }) {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.data.data);
  const [destinations, setDestinations] = useState([]);
  const [location, setLocation] = useState('');

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    const result = findUniques(tours, 'country');
    setFilteredDataSource(result);
    setMasterDataSource(result);
    console.log('search_empty', search);
  }, []);

  const findUniques = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.country
          ? item.country.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
      console.log('search', search);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
      console.log('search', search);
    }
  };

  const renderCardItem = ({ item, key }) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <BgMaskedImage />
      <Header
        titleStyle={{
          fontWeight: 'bold',
          fontSize: 16,
          color: 'white',
          //fontFamily: 'space',
        }}
        Title={'Destinations'}
        leftIconOnPress={() => navigation.goBack()}
        leftIcon={
          <Ionicons name='ios-chevron-back-sharp' size={25} color='white' />
        }
      />

      <View style={styles.searchArea}>
        <SearchBar
          placeholder='Find your Destinations'
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          cleanVal={() => setSearch('')}
        />
      </View>

      <View style={styles.destinationsArea}>
        <FlatList
          numColumns={2}
          data={filteredDataSource}
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
    height: height ,
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row',
    //backgroundColor: 'red',
  },
  card: {
    width: width * 0.45,
    height: width * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 15,
    //elevation: 0.1,
    backgroundColor: 'rgba(17,17,17,0.5)',
  },
  resultCard: {
    width: width * 0.8,
    height: width * 0.8,
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
