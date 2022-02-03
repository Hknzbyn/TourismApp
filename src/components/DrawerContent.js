import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  HomeStack,
  TripStack,
  SearchStack,
  FavoritesStack,
  ProfileStack,
  TryStack,
} from '../navigation/StackNavigator';
import { Ionicons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import {} from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
const { width, height } = Dimensions.get('window');
export default function DrawerContent(props) {
  const HomeIcon = <Ionicons name='ios-home' size={25} color='black' />;
  const DestinationIcon = <Fontisto name='earth' size={24} color='black' />;
  const ImagesIcon = <Ionicons name='images' size={25} color='black' />;
  const ListIcon = <Ionicons name='list-sharp' size={27} color='black' />;
  const MessageIcon = (
    <MaterialCommunityIcons name='email' size={27} color='black' />
  );
  const TryIcon = <Ionicons name='ios-help-circle' size={30} color='black' />;
  const InfoIcon = (
    <Ionicons name='information-circle' size={30} color='black' />
  );

  const SettingIcon = <Ionicons name='settings' size={25} color='black' />;
  const LogoutIcon = <Ionicons name='log-out' size={30} color='black' />;

  const GoPage = ({ onPress, pageName, icon }) => {
    return (
      <TouchableOpacity style={styles.goPage} onPress={onPress}>
        <View
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {icon}
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: '600', fontSize: 14 }}>{pageName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/santorini.jpg')}
        resizeMode='center'
        style={styles.ProfileArea}>
        <View style={styles.Avatar}></View>
        <View style={styles.UserNameArea}>
          <Text style={styles.UserName}>USERNAME</Text>
        </View>
      </ImageBackground>

      <View style={styles.PagesArea}>
        <GoPage
          pageName={'Home'}
          icon={HomeIcon}
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}
        />
        <GoPage pageName={'Destination'} icon={DestinationIcon} />
        <GoPage pageName={'Trip Detail'} icon={ListIcon} />
        <GoPage pageName={'Trip Collections'} icon={ImagesIcon} />

        <GoPage
          pageName={'About'}
          icon={InfoIcon}
          onPress={() => {
            props.navigation.navigate('About');
          }}
        />
        <GoPage
          pageName={'Contact'}
          icon={MessageIcon}
          onPress={() => {
            props.navigation.navigate('ContactScreen');
          }}
        />
        <GoPage
          pageName={'TryScreen'}
          icon={TryIcon}
          onPress={() => {
            props.navigation.navigate('Try');
          }}
        />

        <View
          style={{
            width: 280,
            height: 0.5,
            borderWidth: 0.2,
            borderColor: 'black',
            marginTop: 100,
          }}
        />
        <Text
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Member
        </Text>
        <GoPage pageName={'Dashboard'} icon={HomeIcon} />

        <GoPage pageName={'Settings'} icon={SettingIcon} />
        <GoPage pageName={'Logout'} icon={LogoutIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ProfileArea: {
    height: height * 0.2,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  PagesArea: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  Avatar: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  UserNameArea: {
    paddingLeft: 20,
  },
  UserName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  goPage: {
    paddingTop: 25,
    height: height * 0.07,
    flexDirection: 'row',
    //paddingHorizontal: 20,

    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'gray'
  },
});
