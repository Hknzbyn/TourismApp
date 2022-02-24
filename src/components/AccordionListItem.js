import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');


 export default function AccordionListItem(props,{children}){

  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View
      ref={ref}
      style={styles.container}
    >
          <TouchableOpacity
            onPress={() => {
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            activeOpacity={0.9}
          >
            <Text>
              {props.title}
            </Text>
           {children}
          </TouchableOpacity>
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.64,
    width: width*0.97,
    //paddingTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'red'
  },
 
  
});