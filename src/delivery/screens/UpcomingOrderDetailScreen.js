// order history past detail screen code

import React, {useState, Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import {ORDERHISTORYPAST} from '../../data/dummy-data';

//install the dependency "npm install react-native-stars --save"
import Stars from 'react-native-stars';
import MainStyle from '../../styleSheet/MainStyle';
import UnderlineView from '../../components/underlineView';
const renderGridItem = itemData => {
  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={styles.orderTitle}>x1 {itemData.item.title}</Text>
          <Text style={MainStyle.descHistoryText}>{itemData.item.details}</Text>
          <Text style={styles.price}>{itemData.item.price} LEK</Text>
        </View>
        <View
          style={{
            backgroundColor: '#F2F3F0',
            height: 60,
            width: 60,
            borderRadius: 6,
          }}>
          <Image
            style={styles.image}
            source={require('../../images/noodle.png')}
          />
        </View>
      </View>
    </View>
  );
};

const PastOrderDetailScreen = props => {
  const showAlert1 = () => {
    Alert.alert(
      'Cancel Order',
      'Are you sure you want to cancel this order ?',
      [
        {
          text: 'Go Back',
          style: 'cancel',
          onPress: () => console.log('OK Pressed'),
        },
        {
          text: 'Cancel Order',
          onPress: () => console.log('Cancel Pressed'),
        },
      ],
    );
  };
  const getFooter = itemData => {
    return (
      <View style={{marginTop: 10}}>
        <UnderlineView />

        <View style={styles.subtotalView}>
          <Text style={styles.subNdelivText}>Subtotal</Text>

          <Text style={[styles.subNdelivText, {textAlign: 'right'}]}>
            2.500ALL
          </Text>
        </View>

        <View style={styles.subtotalView}>
          <Text style={[styles.subNdelivText, {width: 200}]}>
            Wonderpoints discount
          </Text>

          <Text style={[styles.subNdelivText, {textAlign: 'right'}]}>
            -50ALL
          </Text>
        </View>

        <View style={styles.subtotalView}>
          <Text style={styles.subNdelivText}>New Subtotal</Text>

          <Text style={[styles.subNdelivText, {textAlign: 'right'}]}>
            2.450ALL
          </Text>
        </View>

        <View style={styles.subtotalView}>
          <Text style={styles.subNdelivText}>Delivery Charge</Text>

          <Text style={[styles.subNdelivText, {textAlign: 'right'}]}>0ALL</Text>
        </View>
        <View style={{marginTop: 16}}>
          <UnderlineView />
        </View>
        <View style={[styles.subtotalView, {marginTop: 10}]}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={[styles.totalText, {color: '#E1251B'}]}>2.500ALL</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={MainStyle.screen}>
      <UnderlineView />

      <View style={{marginLeft: 16, marginRight: 16, marginTop: -12}}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={ORDERHISTORYPAST}
          renderItem={renderGridItem}
          ListFooterComponent={getFooter}
          numColumns={1}
          directionalLockEnabled={true}
        />
        <TouchableOpacity style={styles.buttonView} onPress={showAlert1}>
          <Text style={styles.buttonText}>Cancel Order </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PastOrderDetailScreen;
PastOrderDetailScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Order History</Text>,
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
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Gotham',
  },
  price: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Gotham',
    lineHeight: 13.26,
    marginTop: 8,
    // marginBottom: 4,
    color: '#E1251B',
  },
  priceView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: 60,
    height: 60,
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
    lineHeight: 15.31,
    width: '45%',
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
