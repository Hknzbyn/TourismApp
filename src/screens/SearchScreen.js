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
import axios from 'axios';
import BgMaskedImage from '../components/BgMaskedImage';
import Header from '../components/Header';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default function SearchScreen({ navigation }) {
  const [destinations, setDestinations] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    console.log('loc. ', location);
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/search',
      params: { query: location, locale: 'tr_TR' },
      headers: {
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        'x-rapidapi-key': 'ffc6c2260dmsh78d75aef55c3705p1df24bjsn81be1192e33c',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDestinations(response.data.suggestions[1].entities);
        console.log(response.data.suggestions[1].entities);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [location]);

  const renderCardItem = ({ item, key }) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
          width: width,
        }}>
        <Text style={{ fontSize: 25, color: 'black' }}>{item.name}</Text>
      </View>
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
          data={destinations}
          keyExtractor={(item) => item.destinationId}
          renderItem={renderCardItem}
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
    //backgroundColor:'red'
  },
  card: {
    width: width * 0.9,
    height: height * 0.25,
    backgroundColor: '#333333',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardHeader: {
    width: width * 0.9,
    height: height * 0.1,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'center',
    color: 'black', //'#2e2e2e',
  },
  cardBody: {
    width: width * 0.9,
    height: height * 0.1,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBodyText: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'center',
    color: 'black', //'#2e2e2e',
  },
});
