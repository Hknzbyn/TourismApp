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
              
              height: 400,
              width: 250,
              borderRadius: 125,
              backgroundColor: 'rgba(17, 17, 17, 0.6)',
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
 
  );
}
