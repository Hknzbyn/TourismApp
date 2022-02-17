import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';

import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function TryScreen({ navigation }) {
  const [tour, setTour] = useState([]);
  //const [lastIndex, setLastIndex] = useState(1);
  var data = [
    {
      original_name: '쌈 마이웨이',
      id: 70813,
      media_type: 'tv',
      name: 'Fight My Way',
      vote_count: 5,
      status: true,
      mtatus: false,
    },

    {
      vote_average: 8.2,
      vote_count: 8057,
      id: 550,
      video: false,
      media_type: 'movie',
      title: 'Fight Club',
      status: true,
      mtatus: false,
    },

    {
      vote_average: 6.1,
      vote_count: 215,
      id: 345922,
      video: false,
      media_type: 'movie',
      status: true,
      mtatus: true,
    },

    {
      original_name: 'Fight',
      id: 46554,
      media_type: 'tv',
      name: 'Fight',
      vote_count: 0,
      vote_average: 0,
      status: true,
      mtatus: true,
    },

    {
      original_name: 'The Good Fight',
      id: 69158,
      media_type: 'tv',
      name: 'The Good Fight',
      vote_count: 22,
      status: true,
      mtatus: true,
    },

    {
      vote_average: 0,
      vote_count: 0,
      id: 158301,
      video: false,
      media_type: 'movie',
      title: 'Fight',
      status: false,
      mtatus: true,
    },
  ];

  useEffect(() => {
    //getData();
  }, []);

  const countType = (type) => {
    const countTypes = data.filter((movie) => movie.status === type);
    const countTypes2 = data.filter((movie) => movie.mtatus === type);

    return countTypes.length + countTypes2.length;
  };

  //Getting data from google firebase
  const getData = async () => {
    const dbRef = ref(getDatabase());
    let tours = [];
    var i = 0;
    var lastIndex = 1;
    for (i; i <= lastIndex; i++) {
      await get(child(dbRef, `tours/${i}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            lastIndex++;
            tours.push(snapshot);
            console.log('tours', tours.length);

            //setLastIndex(lastIndex+1);
            //console.log(snapshot);
          } else {
            lastIndex--;

            //setLastIndex(lastIndex);
            console.log('No data available');
            setTour(tours);
          }
        })

        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'white', fontSize: 20 }}>
        {' '}
        true count: {countType(true)}
      </Text>
      <FlatList
        data={tour}
        renderItem={({ item }) => (
          <Text style={{ color: 'white', fontSize: 20 }}>{item.country}</Text>
        )}
      />
    </View>
  );
}
