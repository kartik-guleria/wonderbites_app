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
import {CARTCATEGORIES} from '../data/dummy-data';
import MyButton from '../components/MyButton';
import MainStyle from '../src/styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';
import Colors from '../constants/Colors';
const renderGridItem = itemData => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#F2F3F0',
        borderRadius: 12,
        height: 80,
        margin: 8,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.15,
        shadowRadius: 2,
      }}>
      <Image style={styles.image} source={require('../src/images/cart.png')} />

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text style={styles.foodName}>{itemData.item.food}</Text>
          <Text style={styles.classification}>
            {itemData.item.classification}
          </Text>
          <Text style={styles.foodPrice}>{itemData.item.totalPrice}</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.editTheMeal}>
              <Text>Edit the meal</Text>
              <Image
                style={styles.icon1}
                source={require('../src/images/arrow.png')}
              />
              <Image
                style={styles.icon2}
                source={require('../src/images/arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.totalPrice,
              {fontSize: 12, textAlign: 'right', marginRight: -1},
            ]}>
            x2
          </Text>
          <Text
            style={[styles.totalPrice, {textAlign: 'right', marginRight: -1}]}>
            {itemData.item.totalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};
const getFooter = props => {
  return (
    <View style={{marginBottom: 20}}>
      <UnderlineView />
      <Text style={styles.note}>Add a note to your order</Text>

      <View style={[styles.noteTextField]}>
        <TextInput
          placeholder="Add your note here"
          multiline={true}
          numberOfLines={4}
          style={styles.noteText}
        />
      </View>

      <View style={[styles.line, {marginTop: 18}]}></View>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.coupon}>Redeem</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.codeView,
              {
                flexDirection: 'row',
                marginLeft: 16,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              style={styles.codeText}
              placeholder="wonderpoints"
              placeholderTextColor="#2B2C2D"
            />
            <Image
              style={{height: 6, width: 10, margin: 10}}
              source={require('../src/images/down_single.png')}
            />
          </View>
          <View style={styles.codeView}>
            <TextInput
              style={styles.codeText}
              placeholder="Code"
              placeholderTextColor="#2B2C2D"
            />
          </View>
          <View style={styles.applyView}>
            <TouchableOpacity>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.codeView,
            {
              flexDirection: 'row',
              width: 136,
              marginLeft: 16,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
            },
          ]}>
          <Image
            style={{
              height: 11,
              width: 11,
              marginRight: 2,
              resizeMode: 'contain',
            }}
            source={require('../src/images/coin_small.png')}
          />
          <Text style={styles.coinText}>500 wonderpoints</Text>
          <View
            style={{
              height: 16,
              width: 16,
              marginTop: -8,
              marginRight: -20,
              alignSelf: 'flex-start',
              borderRadius: 8,
              backgroundColor: Colors.primaryColor,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                // alignSelf: 'center',
                textAlign: 'center',
                lineHeight: 20,
                marginBottom: 5,
              }}>
              -
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.line, {marginTop: 16}]}></View>

      <View style={styles.subtotalView}>
        <Text style={styles.subtotalText}>Subtotal</Text>

        <Text style={[styles.subtotalText, {textAlign: 'right'}]}>
          2,500ALL
        </Text>
      </View>

      <View style={styles.subtotalView}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'Gotham',
            fontStyle: 'normal',
            color: '#2B2C2D',
          }}>
          Wonderpoints discount
        </Text>

        <Text style={[styles.subtotalText, {textAlign: 'right'}]}>-50ALL</Text>
      </View>

      <View style={styles.subtotalView}>
        <Text style={styles.subtotalText}>New Subtotal</Text>

        <Text style={[styles.subtotalText, {textAlign: 'right'}]}>
          2,450ALL
        </Text>
      </View>

      <View style={styles.deliveryView}>
        <Text style={styles.subtotalText}>Delivery Charge</Text>
        <Text style={[styles.subtotalText, {textAlign: 'right'}]}>0ALL</Text>
      </View>

      <View style={[styles.line, {marginTop: 13}]}></View>

      <View style={styles.totalView}>
        <Text style={[styles.totalAmount, {color: '#2B2C2D'}]}>
          Total Amount
        </Text>
        <Text style={[styles.totalAmount, {textAlign: 'right'}]}>2,500ALL</Text>
      </View>
      <Text style={[MainStyle.descText, {color: '#2B2C2D'}]}>
        ‘‘you will earn 24.5 wonderpoints’’
      </Text>
    </View>
  );
};

const CartScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <UnderlineView />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CARTCATEGORIES}
        showsVerticalScrollIndicator="false"
        renderItem={renderGridItem}
        numColumns={1}
        ListFooterComponent={getFooter}
      />
      <View style={{margin: 10}}>
        <MyButton
          title="Continue"
          onSelect={() => {
            props.navigation.navigate('Checkout');
          }}
        />
      </View>
    </View>
  );
};

export default CartScreen;
CartScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> My Bag </Text>,
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
    marginTop: 8,
    fontSize: 12,
    color: '#C4C4C4',
    fontFamily: 'Gotham',
    fontWeight: '500',
  },
  foodName: {
    textAlign: 'left',
    fontSize: 14,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontWeight: '500',
  },
  totalPrice: {
    textAlign: 'right',
    marginTop: 5,
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
    width: 80,
    height: 80,
    backgroundColor: '#F2F3F0',
    borderRadius: 12,
  },
  flatlistView: {
    marginTop: 20,
  },
  note: {
    textAlign: 'left',
    marginTop: 8,
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 16,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
  },
  noteTextField: {
    marginTop: 16,
    marginRight: 19,
    marginLeft: 15,
    borderRadius: 12,
    fontSize: 12,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    borderWidth: 1,
    borderColor: '#dddddd',
    lineHeight: 15,
  },
  noteText: {
    textAlign: 'left',
    marginTop: 16,
    marginLeft: 14,
    marginBottom: 16,
    fontSize: 12,
    color: '#A2A2A2',
    fontFamily: 'Gotham',
    fontWeight: '300',
    lineHeight: 13,
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
  codeView: {
    borderRadius: 6,
    marginTop: 16,
    borderColor: '#F2F3F0',
    height: 32,
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
    color: '#2B2C2D',
    fontFamily: 'Gotham',
  },
  coinText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#2B2C2D',
    fontFamily: 'Gotham',
  },
  applyView: {
    marginTop: 16,
    marginRight: 19,
    marginLeft: 9,
    backgroundColor: Colors.primaryColor,
    fontWeight: '500',
    borderRadius: 6,
    width: 85,
    height: 31,
    fontFamily: 'Gotham',
  },
  applyText: {
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 25,
    marginRight: 24,
    marginBottom: 7,
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'Gotham',
  },
  subtotalView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 17,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'space-between',
  },
  subtotalText: {
    flex: 1 / 2,
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Gotham',
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
    marginBottom: 50,
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
    textAlign: 'left',
    fontWeight: 'bold',
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
