import React from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {PAYMENTDETAIL} from '../../data/dummy-data';
import MyButton from '../../components/MyButton';
import Colors from '../../constants/Colors';
import MainStyle from '../../styleSheet/MainStyle';
import UnderlineView from '../../components/underlineView';
const renderGridItem = itemData => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        marginTop: 12,
        borderColor: '#dddddd',
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
      }}>
      <Image style={styles.image} source={require('../../images/visa.png')} />

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column', marginLeft: 15, marginTop: 8}}>
          <Text style={[MainStyle.descText, {fontWeight: '500'}]}>
            {itemData.item.cardNo}
          </Text>
          <Text
            style={[
              MainStyle.deliveryTime,
              {alignSelf: 'flex-start', fontWeight: '400'},
            ]}>
            {itemData.item.expDate}
          </Text>

          <Text
            style={[
              styles.classification,
              {color: Colors.primaryColor, fontWeight: 'bold'},
            ]}>
            {itemData.item.state}
          </Text>
        </View>

        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.buttonStyleRed}
            onPress={() => props.navigation.navigate('Home')}>
            <View>
              <Text style={styles.text_color}>Edit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const getFooter = props => {
  return (
    <View
      style={{
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
        elevation: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          marginTop: 10,
          borderColor: '#dddddd',
          borderWidth: 1,
          padding: 15,
          borderRadius: 5,
        }}>
        <Image
          style={[styles.image, {height: 26, width: 26}]}
          source={require('../../images/dollor.png')}
        />

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 15, justifyContent: 'center'}}>
            <Text style={styles.foodName}>Cash Only</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginRight: 15,
              height: 26,
              width: 26,
              borderRadius: 13,
              borderColor: '#C4C4C4',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              style={{
                height: 16,
                width: 16,
              }}
              source={require('../../images/tick.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const PaymentDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <UnderlineView />
      <FlatList
        style={{width: '90%', marginTop: -8}}
        keyExtractor={(item, index) => item.id}
        data={PAYMENTDETAIL}
        showsVerticalScrollIndicator="false"
        renderItem={renderGridItem}
        numColumns={1}
        ListFooterComponent={getFooter}
      />

      <View
        style={{
          width: '95%',
          marginBottom: 30,
        }}>
        <MyButton
          title="Add"
          onSelect={() => {
            props.navigation.navigate('AddNewCard');
          }}
        />
      </View>
    </View>
  );
};

export default PaymentDetailScreen;
PaymentDetailScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Payment Details</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
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
    marginTop: 5,
    fontSize: 12,
    color: '#C4C4C4',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  foodName: {
    textAlign: 'left',
    fontSize: 16,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontWeight: '500',
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
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Gotham',
  },
  image: {
    width: 44,
    height: 27,
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
