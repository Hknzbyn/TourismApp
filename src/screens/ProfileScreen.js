import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import BgMaskedImage from '../components/BgMaskedImage';

import Header from '../components/Header';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';

const { width, height } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({});
  const [pressedTrip, setPressedTrip] = useState(false);
  const [pressedFollowers, setPressedFollowers] = useState(false);
  const [pressedFollowing, setPressedFollowing] = useState(false);
  const [pressedTry, setPressedTry] = useState(false);
  const [pressedEdit, setPressedEdit] = useState(false);

  const Trips = () => {
    return (
      <View style={styles.BottomActiveArea}>
        <Text>Trips</Text>
      </View>
    );
  };

  const Followers = () => {
    return (
      <View style={styles.BottomActiveArea}>
        <View style={styles.BottomActiveTitleArea}>
          <Text style={styles.BottomActiveTitle}>Followers</Text>
        </View>
        <View
          style={{
            width: width,
            height: height * 0.63,
            justifyContent:'flex-start',
            alignItems: 'center',
            //backgroundColor: 'red',
            
         
          }}>

            

          </View>
      </View>
    );
  };

  const Following = () => {
    return (
      <View style={styles.BottomActiveArea}>
        <Text>Following</Text>
      </View>
    );
  };

  const Edit = () => {
    return (
      <View style={styles.BottomActiveArea}>
        <Text>Edit</Text>
      </View>
    );
  };

  const togglePressed = (pressed) => {
    //console.log('pressed', pressed);

    if (pressed === 'pressedTrip') {
      setPressedTrip(true);
      setPressedFollowers(false);
      setPressedFollowing(false);
      setPressedEdit(false);
    } else if (pressed === 'pressedFollowers') {
      setPressedFollowers(true);
      setPressedTrip(false);
      setPressedFollowing(false);
      setPressedEdit(false);
    } else if (pressed === 'pressedFollowing') {
      setPressedFollowing(true);
      setPressedTrip(false);
      setPressedFollowers(false);
      setPressedEdit(false);
    } else if (pressed === 'pressedEdit') {
      setPressedEdit(true);
      setPressedFollowing(false);
      setPressedTrip(false);
      setPressedFollowers(false);
    }
  };

  const TabText = ({ onPress, topText, bottomText }) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: 75,
          width: 110,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text numberOfLines={1} style={styles.topText}>
          {topText}
        </Text>
        <Text numberOfLines={1} style={styles.bottomText}>
          {bottomText}
        </Text>
      </Pressable>
    );
  };

  const BottomPart = () => {
    if (pressedFollowers === true) {
      return <Followers />;
    } else if (pressedFollowing === true) {
      return <Following />;
    } else if (pressedEdit === true) {
      return <Edit />;
    } else {
      return <Trips />;
    }
  };

  return (
    <View style={styles.container}>
      <BgMaskedImage />
      <Header
        leftIconOnPress={() => navigation.goBack()}
        leftIcon={<Ionicons name='arrow-back-sharp' size={26} color='white' />}
      />
      <View style={styles.TopArea}>
        <View style={styles.UserInfo}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.userPicture}>
              <ImageBackground
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100 / 2,
                  overflow: 'hidden',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
                source={require('../../assets/user.png')}>
                <Pressable
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 30 / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 7,
                    right: 7,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                  }}
                  onPress={() => Alert.alert('Change Profile Picture')}>
                  <MaterialCommunityIcons
                    name='pencil'
                    size={16}
                    color='white'
                  />
                </Pressable>
              </ImageBackground>
            </View>
            <View style={styles.userTextArea}>
              <Text style={styles.userNameText}>User Name</Text>
              <Text style={styles.userLocationText}>Location</Text>
              <Pressable
                onPress={() =>
                  Alert.alert('Edit Profile // Follow // unfollow')
                }
                style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.UserDetail}>
            <TabText
              topText='0'
              bottomText='Trips'
              onPress={() => togglePressed('pressedTrip')}
            />
            <TabText
              topText='0'
              bottomText='Followers'
              onPress={() => togglePressed('pressedFollowers')}
            />
            <TabText
              topText='0'
              bottomText='Following'
              onPress={() => togglePressed('pressedFollowing')}
            />
          </View>
        </View>
      </View>
      <View style={styles.BottomArea}>{BottomPart()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 18,
    textAlign: 'center',
    color: 'black',
  },
  TopArea: {
    height: height * 0.25,
    width: width,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  BottomArea: {
    height: height * 0.67 - 10,
    width: width,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  UserInfo: {
    height: height * 0.3,
    width: width,
    //backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userPicture: {
    height: height * 0.15,
    width: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',

    //backgroundColor: 'blue',
  },
  userTextArea: {
    height: height * 0.15,
    width: width * 0.6,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 10,
    //backgroundColor: 'gray',
  },
  userNameText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  userLocationText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
  },
  followButton: {
    height: 30,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17,182,25, 1)',
  },
  followButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  UserDetail: {
    height: height * 0.15,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '500',
  },
  BottomActiveArea: {
    height: height * 0.66,
    width: width,
    paddingHorizontal: 10,
    paddingTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  BottomActiveTitle: { color: 'black', fontSize: 18, fontWeight: 'bold' },
  BottomActiveTitleArea: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
