import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar, FlatList} from 'react-native';
import MainStyles from '../src/styleSheet/MainStyle';
import WaterMarkView from '../components/WaterMarkView';
import UnderlineView from '../components/underlineView';
import Colors from '../constants/Colors';
const DATA = [
  {
    id: '1',
    detailDesc: 'this is an offer for you',
    title: 'Friday Sale',
    time: '2min ago',
  },
  {
    id: '2',
    detailDesc: 'this is an offer for you',
    title: 'Friday Sale',
    time: '2min ago',
  },
  {
    id: '3',
    detailDesc: 'this is an offer for you',
    title: 'Friday Sale',
    time: '2min ago',
  },
  {
    id: '4',
    detailDesc: 'this is an offer for you',
    title: 'Friday Sale',
    time: '2min ago',
  },
  {
    id: '5',
    detailDesc: 'this is an offer for you',
    title: 'Friday Sale',
    time: '2min ago',
  },
];
const Item = ({title, detailDesc}) => (
  <View style={{marginLeft: 20, marginRight: 20}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Image
        source={require('../src/images/menuItem.png')}
        style={{width: 45, height: 45, marginRight: 10, resizeMode: 'contain'}}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '83%',
        }}>
        <Text style={styles.title}>
          {title}
          <Text style={[styles.description, {fontWeight: '100'}]}>
            {detailDesc}
          </Text>
        </Text>
        <Text style={[styles.description]}> 2min ago </Text>
      </View>
      <Image
        source={require('../src/images/dots.png')}
        style={{
          width: 8,
          height: 15,
          marginRight: 10,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
    </View>
    <UnderlineView />
  </View>
);
const NotificationViewScreen = props => {
  const renderItem = ({item}) => (
    <Item title={item.title} detailDesc={item.detailDesc} />
  );
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View
        style={[
          MainStyles.MainContainerLight,
          {marginBottom: 100, marginTop: -10},
        ]}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator="false"
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <WaterMarkView />
      {/* <View>
        <Image
          source={require('../src/images/notification.png')}
          style={styles.image}
        />
        <Text style={[MainStyles.descText, {marginTop: 80, fontSize: 18}]}>
          No new notifications.
        </Text>
      </View>
      <WaterMarkView /> */}
    </View>
  );
};

export default NotificationViewScreen;
NotificationViewScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> Notifications </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  title: {
    color: Colors.textColor,
    fontFamily: 'Gotham',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'left',
  },
  image: {
    marginTop: 40,
    height: 154,
    width: 177,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  description: {
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontSize: 12,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'left',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});
