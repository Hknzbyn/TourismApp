import { View, Text } from 'react-native';

export default function Title() {
  return <Text style={styles.title}> TOURZIO </Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontFamily: 'space',
  },
});
