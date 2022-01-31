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
    <ImageBackground
      style={{
        flex: 1,
        position: 'absolute',
        //backgroundColor: 'black', // "Edge" background
        maxHeight: 400 - 50,
      }}>
      <MaskedView
        style={{}}
        maskElement={
          <View
            style={{
              height: 400,
              width: 250,
              borderRadius: 125,
              backgroundColor: 'rgba(45, 48, 44, 0.7)',
              position: 'absolute',
              top: -50,
              transform: [{ scaleX: 3 }],
            }}></View>
        }>
        <Image
          resizeMode='cover'
          style={{ height: 400, width: width, top: -50 }}
          source={require('../../assets/santorini.jpg')}
        />
      </MaskedView>
    </ImageBackground>
  );
}
