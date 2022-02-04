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

export default function BgMaskedImage() {
  return (
  
      <MaskedView
        style={{  flex: 1,position: 'absolute'}}
        maskElement={
          <View
            style={{
              height: 800,
              width: 500,
              borderRadius: 350,
              backgroundColor: 'black',
              top: -300,
              transform: [{ scaleX: 3 }],
            }}></View>
        }>
        <Image
          resizeMode='cover'
          style={{ height: 800, width: 500, top: -50, left: 25 }}
          source={require('../../assets/santorini.jpg')}
        />
      </MaskedView>
 
  );
}
