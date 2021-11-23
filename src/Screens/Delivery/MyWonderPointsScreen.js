// order history past detail screen code

import React, {useState, Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
  Alert,
  TextInput,
} from 'react-native';
import {WONDERPOINTS} from '../../data/dummy-data';
import MainStyle from '../../styleSheet/MainStyle';
import UnderlineView from '../../components/underlineView';
import WonderPointTab from '../../components/wonderPointTab';
import {color} from 'react-native-reanimated';
const renderGridItem = itemData => {
  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 6,
          }}>
          <Image
            style={styles.image}
            source={require('../../images/wonderPointsActive.png')}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',

            width: '80%',
          }}>
          <View>
            <Text style={styles.orderTitle}>x1 {itemData.item.title}</Text>

            <Text
              style={[
                MainStyle.descHistoryText,
                {
                  fontWeight: '500',
                  fontSize: 12,
                  color: '#898989',
                  marginTop: 4,
                },
              ]}>
              {itemData.item.detailDesc}
            </Text>

            <Text
              style={[
                MainStyle.descHistoryText,
                {fontWeight: '500', color: '#898989', marginTop: 4},
              ]}>
              {itemData.item.date} {itemData.item.time}
            </Text>
          </View>
          <View>
            <Text style={styles.price}>{itemData.item.pointCount} </Text>
          </View>
        </View>
      </View>
      <UnderlineView />
    </View>
  );
};

const MyWonderPointsScreen = props => {
  const onSelectSwitch = index => {
    //alert('Selected index: ' + index);
  };
  const getHeader = () => {
    return (
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.subNdelivText,
                  {fontSize: 30, color: '#E1251B', fontWeight: 'bold'},
                ]}>
                562{' '}
              </Text>
              <Text
                style={[
                  styles.subNdelivText,
                  {color: '#000000', textAlignVertical: 'bottom'},
                ]}>
                wonderpoints
              </Text>
            </View>
            <Text
              style={[styles.subNdelivText, {fontSize: 12, color: '#898989'}]}>
              254 Coins expiring on 12-10-2021
            </Text>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity
              style={[styles.buttonStyle, {width: 120, marginBottom: 5}]}
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('MyWonderPoints')}>
              <Text style={MainStyle.buttonTextStyle}>Earn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <UnderlineView />
        <WonderPointTab
          selectionMode={1}
          option1={'All History'}
          option2={'Earnings'}
          option3={'Spendings'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#E91E05'}
        />
      </View>
    );
  };
  state = {
    value: 0,
  };
  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  decrementValue = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };

  return (
    <View style={MainStyle.screen}>
      <UnderlineView />

      <View style={{marginLeft: 16, marginRight: 16}}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={WONDERPOINTS}
          renderItem={renderGridItem}
          ListHeaderComponent={getHeader}
          numColumns={1}
          directionalLockEnabled={true}
        />
      </View>
    </View>
  );
};

export default MyWonderPointsScreen;
MyWonderPointsScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>My wonderpoints</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={[MainStyle.navBackButton, {marginBottom: 10}]}
    />
  ),
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  flatlistBox: {
    flexDirection: 'column',
    borderColor: '#F2F3F0',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
  },

  orderTitle: {
    lineHeight: 15.31,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Gotham',
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#E91E05',
    borderRadius: 10,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Gotham',
    // lineHeight: 13.26,
    marginTop: 8,
    // marginBottom: 4,
    color: '#E1251B',
  },
  priceView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: 61,
    height: 61,
    marginRight: 10,
    resizeMode: 'contain',
  },

  shortLine: {
    backgroundColor: '#C4C4C4',
    height: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  fullLine: {
    backgroundColor: '#C4C4C4',
    height: 1,
    marginTop: 23,
  },
  subtotalView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  subNdelivText: {
    fontFamily: 'Gotham',
    fontWeight: '500',
    // width: '45%',
    lineHeight: 26,
    fontSize: 16,
  },
  totalText: {
    fontFamily: 'Gotham',
    fontWeight: '700',
    lineHeight: 19.89,
    fontSize: 18,
  },
  shortLine2: {
    backgroundColor: '#C4C4C4',
    height: 1,
    marginTop: 16,
  },
  bottomSectionView: {
    marginTop: 23,
    marginLeft: 6,
    marginRight: 6,
  },
  sendText: {
    fontSize: 18,
    lineHeight: 17.23,
    fontWeight: '500',
    fontFamily: 'Gotham',
  },
  questionText: {
    fontSize: 13,
    lineHeight: 13.81,
    fontWeight: '300',
    fontFamily: 'Gotham',
    marginTop: 19,
  },
  howText: {
    fontSize: 16,
    lineHeight: 15.31,
    fontWeight: '500',
    fontFamily: 'Gotham',
    marginTop: 16,
  },
  boxView: {
    marginTop: 10,
    borderRadius: 12,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    height: 202,
  },
  feedbackText: {
    marginLeft: 11,
    marginRight: 26,
    fontSize: 14,
    lineHeight: 14.87,
    fontWeight: '300',
    fontFamily: 'Gotham',
    marginTop: 16,
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: '#E1251B',
    height: 49,
    borderRadius: 12,
    // marginTop: 60,
    // marginBottom: 60,
    bottom: 60,
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 17.23,
    fontWeight: '500',
    fontFamily: 'Gotham',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center',
  },
  myStarStyle: {
    color: '#FFDD6E',
    backgroundColor: 'transparent',
    height: 24,
    width: 24,
  },
  myEmptyStarStyle: {
    color: '#C4C4C4',
  },
});
