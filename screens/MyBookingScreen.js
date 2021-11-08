import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import MainStyles from '../src/styleSheet/MainStyle';
import WaterMarkView from '../components/WaterMarkView';
import UnderlineView from '../components/underlineView';

const MyBookingScreen = props => {
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View>
        <Image
          source={require('../src/images/booking.png')}
          style={styles.image}
        />
        <Text style={[MainStyles.descText, {marginTop: 60, fontSize: 18}]}>
          No bookings yet !
        </Text>
      </View>
      <WaterMarkView />
    </View>
  );
};

export default MyBookingScreen;
MyBookingScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> Your Bookings </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  image: {
    height: 160,
    width: 200,
    marginLeft: -20,
    marginTop: 60,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
