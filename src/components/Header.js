import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header(props) {
  const titleStyle = props.titleStyle || {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  };

  return (
    <View style={styles.header_container}>
      <TouchableOpacity
        onPress={props.backOnPress}
        activeOpacity={0.7}
        style={styles.iconArea}>
        <Ionicons name='ios-chevron-back-sharp' size={25} color='white' />
      </TouchableOpacity>
      <View style={styles.titleArea}>
        <Text style={titleStyle}>{props.Title}</Text>
      </View>
      <View style={styles.iconArea}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header_container: {
    width: width,
    height: height * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(17, 17, 17, 0.5)',
    position: 'relative',
  },
  iconArea: {
    height: height * 0.07,
    width: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArea: {
    height: height * 0.07,
    width: width - 2 * height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
