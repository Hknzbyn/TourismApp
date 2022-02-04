import {
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Ionicons, Fontisto } from '@expo/vector-icons';

export default function SearchBar(props) {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder}
        placeholderTextColor='rgba(45, 48, 44, 0.4)'
        //autoCapitalize={'none'}
        maxLength={30}
        onChangeText={props.onChangeText}
        value={props.value}
      />
      <View
        style={{
          marginLeft: -10,
          justifyContent: 'center',
          alignItems: 'center',
          height: height * 0.05,
          width: height * 0.05,
        }}>
        {props.value === '' ? (
          <Fontisto name='search' size={22} color='rgba(45, 48, 44, 0.4)' />
        ) : (
          <TouchableOpacity onPress={props.cleanVal}>
            <Ionicons
              name='ios-close'
              size={24}
              color='rgba(45, 48, 44, 0.4)'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    position:'absolute',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:20,
    paddingRight:10,
    alignItems: 'center',
    height: height * 0.06,
    width: width * 0.95,
    borderRadius: 250,
    
  },
});
