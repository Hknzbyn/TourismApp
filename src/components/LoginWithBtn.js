import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function LoginWithBtn(props) {
  return (
      <View style={{paddingHorizontal:10}}>

      
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        paddingVertical:2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 100,
        height: 36,
        borderRadius:5,
        backgroundColor: props.bgcolor,
      }}>
      <View style={{ height: 35, width: 35, justifyContent:'center', alignItems:'center' }}>
          {props.icon}
      </View>
      <View style={{ justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'white', fontSize:11, fontWeight:'700'}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
