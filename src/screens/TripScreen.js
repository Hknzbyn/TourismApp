import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
  version,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  CheckBox,
  Pressable,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import BottomSheetView from '../components/BottomSheetView';
import Header from '../components/Header';
import BgMaskedImage from '../components/BgMaskedImage';

import SearchBar from '../components/SearchBar';
import SortByModal from '../components/SortByModal';

export default function TripScreen({ navigation }) {
  const carIcon = <FontAwesome name='car' size={24} color='gray' />;
  const planeIcon = <FontAwesome name='plane' size={24} color='gray' />;
  const bedIcon = <FontAwesome name='bed' size={24} color='gray' />;
  const hotelIcon = <FontAwesome name='hotel' size={24} color='gray' />;
  const foodIcon = <FontAwesome name='cutlery' size={24} color='gray' />;
  const guideIcon = <Entypo name='info-with-circle' size={24} color='gray' />;
  const lunchIcon = (
    <MaterialIcons name='lunch-dining' size={24} color='gray' />
  );
  const breakfastIcon = (
    <MaterialIcons name='free-breakfast' size={24} color='gray' />
  );
  const taxesIcon = (
    <MaterialCommunityIcons name='cash-usd' size={24} color='gray' />
  );
  const likedIcon = <Ionicons name='heart' size={30} color='red' />;
  const likedIcon_outline = (
    <Ionicons name='heart-outline' size={30} color='red' />
  );

  const dispatch = useDispatch();
  const [bswStatus, setBswStatus] = useState(false);
  const tours = useSelector((state) => state.data.data);
  const [tour, setTour] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const [sortNoOfTrip, setSortNoOfTrip] = useState(false);
  const [sortAscending, setSortAscending] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);
  const [sortRelevance, setSortRelevance] = useState(false);

  useEffect(() => {
    //const tours;
    if (sortNoOfTrip === true) {
      setSortAscending(false);
      setSortDescending(false);
      setSortRelevance(false);
      setTour(tours);
    } else if (sortAscending === true) {
      setSortNoOfTrip(false);
      setSortDescending(false);
      setSortRelevance(false);
      const ascending = tours.sort((a, b) => Number(a.price) - Number(b.price));
      setTour(ascending);
      //console.log('ascending', ascending);
    } else if (sortDescending === true) {
      setSortNoOfTrip(false);
      setSortAscending(false);
      setSortRelevance(false);
      const descending = tours.sort((a, b) => Number(b.price) - Number(a.price));
      setTour(descending);
      //console.log('descending', descending);
    } else if (sortRelevance === true) {
      setSortNoOfTrip(false);
      setSortAscending(false);
      setSortDescending(false);
      const reversed = tours.reverse();
      setTour(reversed);
      //console.log('reversed:', reversed);
    } else{
      setTour(tours);
    }
      
  }, [
    bswStatus,
    modalStatus,
    sortNoOfTrip,
    sortAscending,
    sortDescending,
    sortRelevance,
  ]);


  const TitleBsw = ({ title, clear }) => {
    return (
      <View style={styles.TitleArea}>
        <View>
          <Text style={styles.TitleText}>{title}</Text>
        </View>

        <Pressable onPress={clear}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'rgba(17,17,17, 0.3)',
            }}>
            CLEAR
          </Text>
        </Pressable>
      </View>
    );
  };

  const openedBsw = () => {
    return (
      <View style={styles.openedBsw}>
        <View style={styles.bswTitleArea}>
          <Text style={styles.bswTitle}>Filters</Text>
          <Pressable
            onPress={() => {
              setBswStatus(false);
            }}>
            <Ionicons name='close-outline' size={31} color='white' />
          </Pressable>
        </View>

        <View style={styles.bswBudgetArea}>
          <TitleBsw
            title='Budget (for Person)'
            clear={() => {
              Alert.alert('clearBudget');
            }}
          />
          <View></View>
        </View>
        <View style={styles.bswDurationArea}>
          <TitleBsw
            title='Duration Days'
            clear={() => {
              Alert.alert('Duration Days');
            }}
          />
        </View>
        <View style={styles.bswActivityArea}>
          <TitleBsw
            title='Activity Days'
            clear={() => {
              Alert.alert('Activity Days');
            }}
          />
        </View>

        <Pressable
          onPress={() => {
            Alert.alert('Apply');
          }}
          style={styles.applyBtn}>
          <Text style={styles.applyBtnText}>APPLY FILTERR</Text>
        </Pressable>
      </View>
    );
  };

  const renderCardItem = ({ item, key }) => {
    //Function that brings icons according to tour detail status
    const GetIcons = (detail) => {
      const tourDetails = detail;

      //Function that finds how many of the tour detail elements are true
      const countType = (type) => {
        let data = [tourDetails];
        const countTourGuide = data.filter((obj) => obj.tourGuide === type);
        const countBreakfast = data.filter((obj) => obj.breakfast === type);
        const countLunch = data.filter((obj) => obj.lunch === type);
        const countDinner = data.filter((obj) => obj.dinner === type);
        const countAccommodation = data.filter(
          (obj) => obj.accommodation === type
        );
        const countTransport = data.filter((obj) => obj.transport === type);
        const countAirportTaxes = data.filter(
          (obj) => obj.airportTaxes === type
        );

        return (
          countTourGuide.length +
          countBreakfast.length +
          countLunch.length +
          countDinner.length +
          countAccommodation.length +
          countTransport.length +
          countAirportTaxes.length
        );
      };

      const Tab = ({ icon }) => {
        return (
          <View
            style={{
              height: height * 0.05,
              width: height * 0.05,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 1,
              //backgroundColor: 'red',
            }}>
            {icon}
          </View>
        );
      };

      return countType(true) <= 5 ? (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {tourDetails.transport === true ? <Tab icon={planeIcon} /> : null}
          {tourDetails.accommodation === true ? <Tab icon={bedIcon} /> : null}
          {tourDetails.breakfast === true ? <Tab icon={breakfastIcon} /> : null}
          {tourDetails.lunch === true ? <Tab icon={lunchIcon} /> : null}
          {tourDetails.dinner === true ? <Tab icon={foodIcon} /> : null}
          {tourDetails.tourGuide === true ? <Tab icon={guideIcon} /> : null}
          {tourDetails.airportTaxes === true ? <Tab icon={taxesIcon} /> : null}
        </View>
      ) : (
        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {tourDetails.transport === true ? <Tab icon={planeIcon} /> : null}
          {tourDetails.accommodation === true ? <Tab icon={bedIcon} /> : null}
          {tourDetails.breakfast === true ? <Tab icon={breakfastIcon} /> : null}
          {tourDetails.lunch === true ? <Tab icon={lunchIcon} /> : null}
          {tourDetails.dinner === true ? <Tab icon={foodIcon} /> : null}
          {tourDetails.tourGuide === true ? <Tab icon={guideIcon} /> : null}
          {tourDetails.airportTaxes === true ? <Tab icon={taxesIcon} /> : null}
        </ScrollView>
      );
    };

    const GetPrice = (discounted, price) => {
      const discountedStatus = discounted;
      const Finalprice = price;
      if (discountedStatus === true) {
        //console.log('discountedStatus == true');
        return Finalprice - 50;
      } else {
        //console.log('discountedStatus == false');
        return Finalprice;
      }
    };

    //find number of days
    const diffDays = (fisrtDate, endDate) => {
      const NewDate1 = moment(fisrtDate, 'DD-MM-YYYY');
      const NewDate2 = moment(endDate, 'DD-MM-YYYY');
      const diff = NewDate2.diff(NewDate1, 'days');
      //console.log('diff', diff);
      return diff;
    };

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={styles.card}>
        <ImageBackground
          resizeMode='cover'
          borderRadius={10}
          style={styles.cardImage}
          source={{ uri: item.tourImage }}>
          <View style={styles.cardImage}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Alert.alert('Saved', item.tourId);
              }}
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                //backgroundColor: 'blue',
                marginTop: 10,
                marginRight: 10,
              }}>
              {isLiked ? likedIcon : likedIcon_outline}
            </TouchableOpacity>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.95,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                //backgroundColor: 'red',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.cardTitle}>
                  {item.tourLocation} Lorem Ipsum Dolor Sit
                </Text>
                <Text style={styles.cardTitle}>Tour Package</Text>
              </View>
              <View
                style={{
                  height: height * 0.04,
                  width: width * 0.33,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(14,182,33, 1.0)',
                }}>
                <Text
                  numberOfLines={1}
                  style={{ color: 'white', textAlign: 'left' }}>
                  {diffDays(item.tourDateStart, item.tourDateEnd)} Days &{' '}
                  {diffDays(item.tourDateStart, item.tourDateEnd) + 1} Nights
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.CardTextArea}>
          <Text style={{ color: 'rgba(14,182,33, 1.0)', fontWeight: '700' }}>
            {' '}
            Starting From{' '}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>
              <Text>$</Text>
              {GetPrice(item.tourDetail.specialOffers, item.price)}
            </Text>
            <Text style={{ color: 'rgba(45, 48, 44, 0.4)', fontWeight: '700' }}>
              {'  '}
              per Person on twin sharing
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.08,
            width: width * 0.95,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: height * 0.08,
              width: width * 0.4,
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingLeft: 10,
              //backgroundColor: 'purple',
            }}>
            <Text numberOfLines={1} style={styles.cardText}>
              {item.startingLocation}{' '}
              <AntDesign name='arrowright' size={20} color='black' />
              <Text style={styles.cardText}> {item.tourLocation} </Text>
            </Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              width: width * 0.5,
              justifyContent: 'center',
              alignItems: 'flex-end',
              //backgroundColor: 'green',
            }}>
            {GetIcons(item.tourDetail)}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <BgMaskedImage />

      <Header
        titleStyle={{
          fontSize: 26,
          color: 'white',
          fontFamily: 'space',
        }}
        Title='TOURZIO'
        leftIconOnPress={() => navigation.navigate('HomeScreen')}
        leftIcon={<Ionicons name='arrow-back-sharp' size={26} color='white' />}
      />
      <View style={styles.searchArea}>
        <SearchBar
          placeholder='Themes & Catogories'
          //onChangeText={(text) => searchFilterFunction(text)}
          //value={search}
          //cleanVal={() => setSearch('')}
        />
      </View>

      <View
        style={{
          width: width,
          height: height * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={tours}
          keyExtractor={(item) => item.tourId}
          renderItem={renderCardItem}
          style={{ paddingVertical: 5 }}
          initialNumToRender={5}
        />
      </View>

      <BottomSheetView
        BswHeight={height * 0.92}
        status={bswStatus}
        onClose={() => setBswStatus(false)}
        onPressSortBy={() => setModalStatus(true)}
        onPressFilter={() => setBswStatus(true)}>
        {openedBsw()}
      </BottomSheetView>
      <SortByModal
        modalVisible={modalStatus}
        closeModal={() => setModalStatus(false)}
        onOpen={() => setModalStatus(true)}
        NoTripValue={sortNoOfTrip}
        changeNoTripValue={() => setSortNoOfTrip(!sortNoOfTrip)}
        AscendingValue={sortAscending}
        changeAscendingValue={() => {setSortAscending(!sortAscending)}}
        DescendingValue={sortDescending}
        changeDescendingValue={() => setSortDescending(!sortDescending)}
        RelevanceValue={sortRelevance}
        changeRelavenceValue={() => setSortRelevance(!sortRelevance)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 18,
    textAlign: 'center',
    color: 'black',
  },
  openedBsw: {
    height: 600,
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bswTitleArea: {
    height: height * 0.09,
    width: width,
    backgroundColor: 'rgba(17,17,17,0.8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  bswTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'white',
  },
  bswBudgetArea: {
    height: height * 0.35,
    width: width,
    backgroundColor: 'white',
    //backgroundColor: 'yellow',
  },
  bswDurationArea: {
    height: height * 0.2,
    width: width,
    backgroundColor: 'white',
    //backgroundColor: 'green',
  },
  bswActivityArea: {
    height: height * 0.2,
    width: width,
    backgroundColor: 'white',
    //backgroundColor: 'blue',
  },
  applyBtn: {
    marginVertical: 5,
    height: height * 0.07,
    width: width * 0.85,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17,182,25, 1)',
  },
  applyBtnText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  TittleBsw: {
    height: height * 0.02,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  TitleArea: {
    height: height * 0.06,
    width: width,
    elevation: 0.5,
    flexDirection: 'row',
    backgroundColor: 'rgba(220,220,220,0.5)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  TitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    height: height * 0.35,
    width: width * 0.95,
    flexDirection: 'column',
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  cardImage: {
    height: height * 0.2,
    width: width * 0.95,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: 'rgba(17,17,17,0.3)',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  CardTextArea: {
    height: height * 0.07,
    width: width * 0.95,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    //backgroundColor: 'red',
  },
  cardText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  searchArea: {
    height: height * 0.1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
});
