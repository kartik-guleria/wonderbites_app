// order history past detail screen code

import React, {useState, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
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
        <View style={{flex: 2}}>
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
  const getFooter = itemData => {
    return (
      <View>
        <UnderlineView />
        <View>
          <View style={styles.subtotalView}>
            <Text style={styles.subNdelivText}>Subtotal & Tax</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.subNdelivText}>2.800</Text>
              <Text style={styles.subNdelivText}>ALL</Text>
            </View>
          </View>

          <View style={styles.subtotalView}>
            <Text style={styles.subNdelivText}>Delivery Charge</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.subNdelivText}>0</Text>
              <Text style={styles.subNdelivText}>ALL</Text>
            </View>
          </View>

          <View style={[styles.subtotalView, {marginTop: 16}]}>
            <Text style={styles.totalText}>Total Amount Paid</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.totalText, {color: '#E1251B'}]}>2.800</Text>
              <Text style={[styles.totalText, {color: '#E1251B'}]}>ALL</Text>
            </View>
          </View>
        </View>
        <UnderlineView />
        <View style={styles.bottomSectionView}>
          <Text style={styles.sendText}>Send us your feedback</Text>
          <Text style={styles.questionText}>
            Do you have any suggestion or want to share your opinion about the
            food? Let us know!
          </Text>
          <UnderlineView />
          <Text style={styles.howText}>How did you like the food ? </Text>

          <View style={{marginTop: 8, alignItems: 'flex-start'}}>
            <Stars
              default={4}
              count={5}
              starSize={46}
              spacing={10}
              fullStar={
                <Image
                  source={require('../../images/starFill.png')}
                  style={[styles.myStarStyle]}
                />
              }
              emptyStar={
                <Image
                  source={require('../../images/starEmpty.png')}
                  style={[styles.myStarStyle]}
                />
              }
            />
          </View>
          <View style={styles.boxView}>
            <TextInput
              style={styles.feedbackText}
              multiline
              placeholder="Enter your feedback here..."
            />
          </View>

          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.buttonText}>Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={MainStyle.screen}>
      <UnderlineView />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={ORDERHISTORYPAST}
        renderItem={renderGridItem}
        ListFooterComponent={getFooter}
        numColumns={1}
        directionalLockEnabled={true}
      />
    </View>
  );
};

export default PastOrderDetailScreen;
PastOrderDetailScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Order History</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={MainStyle.navBackButton}
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
    marginTop: 23,
    justifyContent: 'space-between',
  },
  subNdelivText: {
    fontFamily: 'Gotham',
    fontWeight: '500',
    lineHeight: 15.31,
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
    marginTop: 60,
    marginBottom: 60,
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
