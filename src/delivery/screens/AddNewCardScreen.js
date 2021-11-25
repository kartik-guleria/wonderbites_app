import React from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MyButton from '../../components/MyButton';
import Colors from '../../constants/Colors';
import MainStyle from '../../styleSheet/MainStyle';
import UnderlineView from '../../components/underlineView';
const AddNewCardScreen = props => {
  return (
    <View style={styles.screen}>
      <UnderlineView />
      <ScrollView style={{width: '100%'}}>
        <View style={{width: '92%', alignSelf: 'center'}}>
          <View
            style={[
              MainStyle.BoxShadow,
              {
                marginTop: 5,
                padding: 10,
                borderRadius: 12,
                backgroundColor: '#F2F3F0',
              },
            ]}>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={MainStyle.buttonText2}>John Doe </Text>
              <Image
                style={styles.image}
                source={require('../../images/mastercard.png')}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{marginTop: 20}}>
                <Text style={MainStyle.buttonText2}>Card Number</Text>
                <Text style={styles.classification}>**** **** **** ****</Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{marginTop: 20}}>
                <Text style={MainStyle.buttonText2}>Month/Year</Text>
                <Text style={styles.classification}>xx/xx</Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={MainStyle.buttonText2}>Cvv</Text>
                <Text style={styles.classification}>xxx</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              paddsing: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '100%'}}>
                <Text
                  style={[
                    MainStyle.inputPhone,
                    {
                      fontSize: 12,
                      marginLeft: 0,
                      marginTop: 20,
                    },
                  ]}>
                  Card Holder’s Name
                </Text>
                <TextInput
                  style={[
                    styles.deliveryTime,
                    {
                      marginTop: 12,
                      marginBottom: 8,
                      borderBottomColor: '#dddddd',
                      borderBottomWidth: 1,
                      fontSize: 12,
                      color: Colors.textColor,
                      paddingBottom: 5,
                    },
                  ]}>
                  John Doe
                </TextInput>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderBottomColor: Colors.primaryColor,
                  borderBottomWidth: 1,
                  width: '100%',
                  paddingRight: 10,
                  paddingLeft: 0,
                  paddingBottom: 5,
                }}>
                <Text
                  style={[
                    MainStyle.registerTextStyle,
                    {
                      // textAlign: 'left',
                      alignSelf: 'flex-start',
                      padding: 0,
                      marginTop: 20,
                      color: Colors.primaryColor,
                    },
                  ]}>
                  Card Number
                </Text>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Image
                    style={[
                      styles.image,
                      {width: 16, height: 12, marginRight: 10},
                    ]}
                    source={require('../../images/card.png')}
                  />
                  <TextInput
                    style={[
                      styles.classification,
                      {marginTop: 0, lineHeight: 17},
                    ]}>
                    {' '}
                  </TextInput>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                marginBottom: 10,
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '50%'}}>
                <Text
                  style={[
                    MainStyle.registerTextStyle,
                    {
                      paddingLeft: 0,
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  Exp Date
                </Text>
                <TextInput
                  style={[
                    MainStyle.deliveryTime,
                    {textAlign: 'left', alignSelf: 'flex-start', marginTop: 8},
                  ]}>
                  DD.MM.YYYY
                </TextInput>
              </View>
              <View style={{width: '50%'}}>
                <Text
                  style={[
                    MainStyle.registerTextStyle,
                    {
                      paddingLeft: 0,
                      textAlign: 'left',
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  CVV Code
                </Text>
                <TextInput
                  style={[
                    MainStyle.deliveryTime,
                    {textAlign: 'left', alignSelf: 'flex-start', marginTop: 8},
                  ]}>
                  xxx
                </TextInput>
              </View>
            </View>
            <View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  marginTop: 20,

                  justifyConent: 'center',
                }}>
                <Image
                  style={[
                    styles.image,
                    {
                      width: 20,
                      height: 20,
                      marginRight: 10,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    },
                  ]}
                  source={require('../../images/checkBox.png')}
                />
                <Text
                  style={[
                    styles.textInput,
                    {height: 30, justifyContent: 'center'},
                  ]}>
                  Set as your default payment method
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{width: '95%', marginBottom: 30}}>
        <MyButton
          title="Add"
          onSelect={() => {
            props.navigation.navigate('CheckoutComplete');
          }}
        />
      </View>
    </View>
  );
};

export default AddNewCardScreen;
AddNewCardScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Add new card</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 8,
    fontSize: 12,
    color: '#C4C4C4',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  classification: {
    textAlign: 'left',
    marginTop: 15,
    fontSize: 18,
    color: '#2B2C2D',
    fontFamily: 'Gotham-Light',
    fontStyle: 'normal',
  },
  classificationText: {
    textAlign: 'left',
    marginTop: 5,
    fontSize: 12,
    color: '#2B2C2D',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    // fontWeight: '500',
  },
  foodName: {
    textAlign: 'left',
    fontSize: 14,
    color: '#2B2C2D',
    marginTop: 15,
    alignSelf: 'flex-start',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textInput: {
    textAlign: 'left',
    fontSize: 12,
    color: '#2B2C2D',
    marginTop: 15,
    alignSelf: 'flex-start',
    fontFamily: 'Gotham',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  textInputActive: {
    textAlign: 'left',
    fontSize: 14,
    color: Colors.primaryColor,
    marginTop: 15,
    alignSelf: 'flex-start',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    // fontWeight: '700',
  },
  totalPrice: {
    textAlign: 'right',
    marginTop: 26,
    marginRight: 5,
    fontSize: 14,
    color: '#E1251B',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  editTheMeal: {
    flexDirection: 'row',
    textAlign: 'right',
    fontSize: 12,
    color: '#000000',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  buttonStyleRed: {
    backgroundColor: Colors.primaryColor,
    height: 30,
    width: 75,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 25,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 12,
    justifyContent: 'center',
    fontFamily: 'Gotham-Bold',
  },
  text_color: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    width: 45,
    height: 30,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
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
  },
  noteTextField: {
    marginTop: 16,
    marginRight: 19,
    marginLeft: 15,
    borderRadius: 12,
    backgroundColor: '#F2F3F0',
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
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#2B2C2D',
  },
  codeView: {
    borderRadius: 6,
    marginTop: 16,
    borderColor: '#F2F3F0',
    borderWidth: 1,
  },
  codeText: {
    fontSize: 12,
    width: 84,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 7,
    textAlign: 'center',
    color: '#A1A1A1',
  },
  applyView: {
    marginTop: 16,
    marginRight: 19,
    marginLeft: 9,
    backgroundColor: '#F2F3F0',
    borderRadius: 6,
    width: 85,
    height: 31,
  },
  applyText: {
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 25,
    marginRight: 24,
    marginBottom: 7,
    fontSize: 12,
    color: '#A1A1A1',
  },
  subtotalView: {
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 15,
    marginRight: 19,
  },
  subtotalText: {
    flex: 1,
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#2B2C2D',
  },
  subtotalAmount: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#2B2C2D',
  },
  deliveryView: {
    flexDirection: 'row',
    marginTop: 23,
    marginLeft: 15,
    marginRight: 19,
  },

  deliveryText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#2B2C2D',
  },

  deliveryAmount: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#2B2C2D',
  },
  totalView: {
    flexDirection: 'row',
    marginTop: 24,
    marginLeft: 15,
    marginRight: 19,
  },
  totalText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#2B2C2D',
  },
  totalAmount: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 18,
    fontStyle: 'normal',
    color: '#E1251B',
  },
  button1: {
    backgroundColor: 'red',
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 28,
    marginLeft: 16,
    marginRight: 16,
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  buttonText1: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
