import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import MainStyles from '../src/styleSheet/MainStyle';
import WaterMarkView from '../components/WaterMarkView';
import UnderlineView from '../components/underlineView';

const TableReservationScreen = props => {
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View>
        <Image
          source={require('../src/images/tableBook.png')}
          style={styles.image}
        />
        <Text style={[MainStyles.descText, {marginTop: 90, fontSize: 18}]}>
          No Table bookings yet !
        </Text>
      </View>
      <WaterMarkView />
    </View>
  );
};

export default TableReservationScreen;
TableReservationScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> Table Reservation </Text>,
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
    height: 140,
    width: 250,
    marginLeft: -20,
    marginTop: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
