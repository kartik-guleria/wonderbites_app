import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import MainStyles from '../../styleSheet/MainStyle';
import {WISHLIST} from '../../data/dummy-data';
import Colors from '../../constants/Colors';
import UnderlineView from '../../components/underlineView';
const renderGridItem = itemData => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#F2F3F0',
        borderRadius: 12,
        height: 110,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        shadowColor: 'black',
        shadowOpacity: 0.12,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        // elevation: 2,
        // paddingTop: 10,
      }}>
      <Image style={styles.image} source={require('../../images/cart.png')} />

      <View
        style={{alignSelf: 'center', flex: 1, marginLeft: 8, marginRight: 8}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Text style={styles.foodName}>{itemData.item.title}</Text>
          <Text style={styles.totalPrice}>{itemData.item.price}</Text>
        </View>

        <Text style={styles.classification}>
          Noodles with lime in a plate. The ingridients of this plate are....
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.foodPrice, {color: Colors.textColor}]}>
            4.9
            <Text style={[styles.foodPrice, {color: Colors.primaryColor}]}>
              *
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.buttonStyleRed}
            onPress={() => props.navigation.navigate('Home')}>
            <View>
              <Text style={styles.text_color}>Add To Bag</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const WishlistScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      {/* <View style={styles.screen}>
        <Image
          source={require('../../images/emptyWishlist.gif')}
          style={styles.imageWish}
        />
        <Text style={styles.sectionTitle}>Your Wishlist is Empty</Text>
        <Text style={styles.classification}>
          Tap heart button to start saving your favorite items.
        </Text>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => props.navigation.navigate('Home')}>
          <View>
            <Text style={styles.buttonText1}>Add Now</Text>
          </View>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
          marginTop: 0,
        }}>
        <Text style={styles.foodName}>Saved for later</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              MainStyles.deliveryTime,
              {textDecorationLine: 'underline', marginRight: 15},
            ]}>
            Add all to cart
          </Text>
          <Text
            style={[
              MainStyles.deliveryTime,
              {textDecorationLine: 'underline', marginRight: 5},
            ]}>
            Clear all
          </Text>
        </View>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={WISHLIST}
        showsVerticalScrollIndicator="false"
        renderItem={renderGridItem}
        numColumns={1}
      />
    </View>
  );
};

export default WishlistScreen;
WishlistScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}>Wishlist</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  imageWish: {
    // marginTop: 100,
    height: 222,
    width: 222,
    alignSelf: 'center',
  },
  buttonStyleRed: {
    backgroundColor: Colors.primaryColor,
    height: 29,
    width: 100,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 8,
    // marginTop: 8,
    alignItems: 'center',
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 12,
    justifyContent: 'center',
    fontFamily: 'Gotham',
    fontWeight: 'bold',
  },
  text_color: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Gotham',
  },
  sectionTitle: {
    fontSize: 28,
    color: '#2B2C2D',
    fontWeight: '700',
    // marginTop: 10,
    // marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    fontFamily: 'Gotham',
  },
  icon2: {
    width: 6,
    height: 4,
    marginTop: 6,
    marginLeft: -2.5,
  },
  icon1: {
    width: 6,
    height: 4,
    marginTop: 6,
    marginLeft: 3,
  },
  foodPrice: {
    textAlign: 'left',
    marginTop: 5,
    fontSize: 14,
    color: '#C4C4C4',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  classification: {
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 10,
    fontSize: 13,
    color: Colors.textColor,
    fontFamily: 'Gotham-Light',
  },
  foodName: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 3,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontWeight: '500',
  },
  totalPrice: {
    textAlign: 'right',
    marginTop: 3,
    marginRight: 5,
    fontSize: 14,
    color: '#E1251B',
    fontFamily: 'Gotham',
    fontWeight: '700',
  },
  editTheMeal: {
    flexDirection: 'row',
    textAlign: 'right',
    fontSize: 12,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontWeight: '500',
  },
  image: {
    width: 97,
    height: '100%',
    backgroundColor: '#F2F3F0',
    borderRadius: 12,
  },
  flatlistView: {
    marginTop: 20,
  },
  note: {
    textAlign: 'left',
    marginTop: 16,
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 12,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
  },
  noteTextField: {
    marginTop: 16,
    marginRight: 19,
    marginLeft: 15,
    borderRadius: 12,
    fontSize: 12,
    color: '#A2A2A2',
    fontFamily: 'Gotham',
  },
  noteText: {
    textAlign: 'left',
    marginTop: 16,
    marginLeft: 14,
    marginBottom: 16,
  },
  line: {
    marginRight: 17,
    marginLeft: 15,
    backgroundColor: '#F5F5F5',
    height: 1,
  },
  coupon: {
    flex: 1,
    textAlign: 'left',
    marginTop: 23,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Gotham',
    color: '#2B2C2D',
  },
  sectionDescription: {
    fontSize: 22,
    color: '#2B2C2D',
    fontWeight: '200',
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    fontFamily: 'Gotham',
    alignSelf: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  deliveryView: {
    flexDirection: 'row',
    marginTop: 22,
    marginLeft: 105,
    marginRight: 90,
    alignSelf: 'center',
  },

  deliveryTime: {
    fontSize: 12,
    color: '#2B2C2D',
    fontWeight: '400',
    alignSelf: 'center',
  },
  button1: {
    backgroundColor: 'red',
    height: 45,
    width: 150,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 170,
    marginLeft: 16,
    marginRight: 16,
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  buttonText1: {
    fontFamily: 'Gotham',
    fontWeight: '500',
    fontSize: 18,
    color: '#FFFFFF',
  },
  button2: {
    marginTop: 27,
    marginLeft: 133,
    marginRight: 134,
    marginBottom: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText2: {
    color: '#2B2C2D',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
  },
});
