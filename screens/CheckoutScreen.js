import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MainStyle from '../src/styleSheet/MainStyle';
import Colors from '../constants/Colors';
import UnderlineView from '../components/underlineView';
const CheckoutScreen = props => {
  return (
    <View style={styles.screen}>
      {/* // <SafeAreaView>*/}
      <UnderlineView />
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={[MainStyle.inputPhone, {marginLeft: 0}]}>
            Delivering to
          </Text>

          <View style={styles.personDetailsView}>
            <Image
              style={styles.image}
              source={require('../src/images/profile.png')}
            />

            <View style={styles.nameView}>
              <Text style={MainStyle.inputPhone}>Sarah Doe</Text>
              <Text
                style={[
                  MainStyle.prodDescTextLight,
                  {marginLeft: 10, marginTop: 8},
                ]}>
                +355 69 69 69 999
              </Text>
            </View>
          </View>

          <UnderlineView />

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.iconDelivery1}
                source={require('../src/images/location.png')}
              />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={[MainStyle.inputPhone, {marginLeft: 35}]}>
                  Delivery Address
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      MainStyle.inputPhone,
                      {color: Colors.primaryColor},
                    ]}>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text
                style={[MainStyle.inputPhone, {marginLeft: 55, marginTop: 20}]}>
                Home
              </Text>
              <View
                style={{
                  marginTop: 16,
                  marginLeft: 55,
                  marginBottom: 5,
                  marginRight: 24,
                }}>
                <Text style={MainStyle.prodDescTextLight}>
                  Rruga e Durresit, Tirane, AL. Mbrapa Ministrise se Arsimit{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Image
                style={styles.icon_Payment1}
                source={require('../src/images/Pay.png')}
              />
              <Image
                style={styles.icon_Payment2}
                source={require('../src/images/visa.png')}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.payment}>Payment Method</Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      MainStyle.inputPhone,
                      {color: Colors.primaryColor},
                    ]}>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={[styles.address, {marginTop: 20}]}>
                *** *** **** 4566
              </Text>
              <View style={{marginTop: 16, marginBottom: 5, marginRight: 24}}>
                <Text style={MainStyle.prodDescTextLight}>
                  Rruga e Durresit, Tirane, AL. Mbrapa Ministrise se Arsimit{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Image
                style={styles.icon_time1}
                source={require('../src/images/time.png')}
              />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={[MainStyle.inputPhone, {marginLeft: 35}]}>
                  Estimated Arrival Time
                </Text>
                <Image
                  style={{
                    marginTop: 4,
                    height: 47,
                    width: 60,
                    marginRight: 5,
                    resizeMode: 'contain',
                  }}
                  source={require('../src/images/miniMap.png')}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: -20,
                marginLeft: 55,
                marginRight: 115,
                marginBottom: 5,
              }}>
              <Text style={MainStyle.prodDescTextLight}>
                11th July, 2021 10:45am
              </Text>
            </View>
          </View>

          <UnderlineView />

          <View style={styles.itemTotalView}>
            <Text style={styles.itemTotal}>Subtotal</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.itemTotal}>2,500ALL</Text>
            </View>
          </View>
          <View style={styles.itemTotalView}>
            <Text style={styles.itemTotal}>Wonderpoints discount</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.itemTotal}>-50ALL</Text>
            </View>
          </View>
          <View style={styles.itemTotalView}>
            <Text style={styles.itemTotal}>New Subtotal</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.itemTotal}>2,450ALL</Text>
            </View>
          </View>

          <View style={styles.deliveryChargeView}>
            <Text style={styles.itemTotal}>Delivery Charge</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.itemTotal}>0ALL</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.totalPriceView}>
            <View style={{marginTop: 25, flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.totalPrice}>2,500ALL</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.totalItems}>Your Order (5 items) </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PaymentDetail')}
              style={styles.button}>
              <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/*   </SafeAreaView > */}
    </View>
  );
};

export default CheckoutScreen;
CheckoutScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Complete Order </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  totalPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryChargeView: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  itemTotalView: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  personDetailsView: {
    flexDirection: 'row',
    marginTop: 15,
  },

  viewContainer: {
    // marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  nameView: {
    flexDirection: 'column',
    // marginLeft: 16,
  },
  image: {
    width: 44,
    height: 44,
  },
  phone: {
    marginLeft: 1,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '300',
    color: '#2B2C2D',
  },
  iconDelivery1: {
    height: 20,
    width: 16,
    resizeMode: 'contain',
  },
  iconDelivery2: {
    height: 7,
    width: 7,
    marginLeft: -11.5,
    marginTop: 5,
    resizeMode: 'contain',
  },
  delivery: {
    textAlign: 'right',
    marginLeft: 41,
    fontSize: 14,
    fontWeight: '700',
    color: '#2B2C2D',
  },
  deliveryChange: {
    color: '#E1251B',
    textAlign: 'right',
    marginLeft: 41,
    marginRight: 7,
    fontSize: 14,
    fontWeight: '500',
  },
  location: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 13,
    marginLeft: 59,
    color: '#2B2C2D',
  },
  address: {
    fontSize: 14,
    fontFamily: 'Gotham',
    color: '#2B2C2D',
  },
  icon_Payment1: {
    height: 13.5,
    width: 18,
  },
  icon_Payment2: {
    height: 3.29,
    width: 3.856,
    marginLeft: -8,
    marginTop: 7,
  },
  payment: {
    textAlign: 'right',
    marginLeft: 41,
    fontSize: 14,
    fontWeight: '700',
    color: '#2B2C2D',
  },
  paymentChange: {
    color: '#E1251B',
    textAlign: 'right',
    marginLeft: 41,
    marginRight: 7,
    fontSize: 14,
    fontWeight: '500',
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 13,
    marginLeft: 59,
    color: '#2B2C2D',
  },
  cardAddress: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000000',
  },
  icon_time1: {
    height: 17,
    width: 20,
    resizeMode: 'contain',
  },
  icon_time2: {
    height: 8.6,
    width: 13.04,
    marginLeft: -9.5,
    marginTop: 4.2,
  },
  estimatedTime: {
    textAlign: 'right',
    marginLeft: 31,
    fontSize: 14,
    fontWeight: '700',
    color: '#2B2C2D',
  },
  time: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000000',
  },
  itemTotal: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    color: '#2B2C2D',
    fontFamily: 'Gotham',
  },

  totalPrice: {
    fontSize: 23,
    fontWeight: '700',
    color: '#E1251B',
  },
  totalItems: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
    color: '#2B2C2D',
    fontFamily: 'Gotham',
  },
  button: {
    width: 160,
    marginTop: 26,
    backgroundColor: '#E1251B',
    borderRadius: 12,
  },
  buttonText: {
    marginTop: 14,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Gotham',
    alignSelf: 'center',
  },
  line: {
    marginTop: 14,
    height: 1,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2B2C2D',
    fontFamily: 'Gotham',
  },
});
