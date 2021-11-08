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
import {ADDRESSDETAIL} from '../data/dummy-data';
import MyButton from '../components/MyButton';
import Colors from '../constants/Colors';
import MainStyle from '../src/styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';
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
      <Image style={styles.image} source={itemData.item.image} />

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text
            style={[
              MainStyle.descText,
              {fontWeight: '500', textAlign: 'left'},
            ]}>
            {itemData.item.title}
          </Text>
          <Text
            style={[
              MainStyle.deliveryTime,
              {textAlign: 'left', marginTop: 5, fontWeight: '400'},
            ]}>
            {itemData.item.Address}
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

const AddressListScreen = props => {
  return (
    <View style={styles.screen}>
      <UnderlineView />
      <FlatList
        style={{width: '90%', marginTop: -8}}
        keyExtractor={(item, index) => item.id}
        data={ADDRESSDETAIL}
        showsVerticalScrollIndicator="false"
        renderItem={renderGridItem}
        numColumns={1}
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

export default AddressListScreen;
AddressListScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>My Addresses</Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={MainStyle.navBackButton}
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
    width: 35,
    height: 35,
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
