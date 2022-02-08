import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';

import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function TryScreen({ navigation }) {
  const [tour, setTour] = useState([]);
  //const [lastIndex, setLastIndex] = useState(1);

  useEffect(() => {
    getData();
  }, []);

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
        {tour.length} tour.length
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
