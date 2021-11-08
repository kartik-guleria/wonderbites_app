import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import MainStyles from '../src/styleSheet/MainStyle';
import {
  INGRIDIENTS,
  INGRIDIENTSTYPE,
  PRODUCTS,
  ADDINGRIDIENTS,
} from '../data/dummy-data';
import Colors from '../constants/Colors';
import UnderlineView from '../components/underlineView';
import {RotationGestureHandler} from 'react-native-gesture-handler';

const AddIngrieidientsScreen = props => {
  const prodId = props.navigation.getParam('productId');
  const selectedProduct = PRODUCTS.find(product => product.id === prodId);

  const renderCategoryGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() =>
          props.navigation.navigate('Category', {categoryId: itemData.item.id})
        }>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width / 3 - 25,
            height: Dimensions.get('window').width / 3 - 25,
            margin: 10,
            borderRadius: 5,
            backgroundColor: '#F2F3F0',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 2,
            elevation: 1,
            transform: [{rotate: '4deg'}],
          }}>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={{
                justifyContent: 'flex-end',
                resizeMode: 'contain',
                width: 10,
                height: 10,
                alignSelf: 'flex-end',
                marginRight: -10,
                marginTop: 10,
              }}
              source={require('../src/images/cross-small.png')}
            />
            <Image
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                resizeMode: 'contain',
                width: 60,
                height: 45,
                // margin: 10,
                // marginTop: -30,
              }}
              source={require('../src/images/ingr2.png')}
            />
          </View>
          <Text style={MainStyles.itemTitle}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderAddGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() =>
          props.navigation.navigate('Category', {categoryId: itemData.item.id})
        }>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width / 3 - 25,
            height: Dimensions.get('window').width / 3 - 25,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 8,
            borderRadius: 5,
            backgroundColor: '#F2F3F0',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 2,
            elevation: 1,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={{
                justifyContent: 'flex-end',
                resizeMode: 'contain',
                width: 10,
                height: 10,
                alignSelf: 'flex-end',
                marginRight: -10,
                marginTop: -12,
              }}
              source={require('../src/images/plus-small.png')}
            />
            <Image
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                resizeMode: 'contain',
                width: 60,
                height: 45,
              }}
              source={require('../src/images/ingr2.png')}
            />
          </View>
          <Text
            style={{
              alignContent: 'center',
              fontSize: 12,
              color: '#2B2C2D',
            }}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderCuisinesItem = items => {
    return (
      // <TouchableOpacity
      //   style={styles.menuItem}
      //   onPress={() =>
      //     props.navigation.navigate('Category', {categoryId: itemData.item.id})
      //   }>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          borderBottomColor: '#DDDDDD',
          borderBottomWidth: 1,
          height: 34,
        }}>
        <Text
          style={{
            alignContent: 'center',
            fontSize: 15,
            width: Dimensions.get('window').width / 5,
            color: '#2B2C2D',
            textAlign: 'center',
            // fontWeight: 'bold',
            fontFamily: 'Gotham',
          }}>
          {items.item.title}
        </Text>
      </View>
      // </TouchableOpacity>
    );
  };

  const Header = () => {
    return (
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.textTitle}>{selectedProduct.title}</Text>
          <Text style={[styles.textTitle, {color: Colors.primaryColor}]}>
            500ALL
          </Text>
        </View>
        <Text style={[styles.descText, {color: '#C4C4C4', marginBottom: 10}]}>
          375 Kcal
        </Text>
        <Text style={[MainStyles.descTextLight, {textAlign: 'left'}]}>
          Chicken, pork, shrimps, honey, soy souce toasted sesame oil, chilli,
          ramen, brown sugar, honey roasted,
        </Text>
        <UnderlineView />
        <Text style={styles.menuItem}>INGRIDIENTS </Text>
      </View>
    );
  };
  const getFooter = () => {
    return (
      <View>
        <FlatList
          numColumns={5}
          data={INGRIDIENTSTYPE}
          renderItem={renderCuisinesItem}
        />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'space-between',
            width: '95%',
            marginTop: 10,
          }}>
          <FlatList
            numColumns={3}
            data={INGRIDIENTS}
            renderItem={renderAddGridItem}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 50,
            justifyContent: 'space-between',
            width: '95%',
            // marginTop: 10,
            marginLeft: 10,
            borderTopColor: '#dddddd',
            borderTopWidth: 1,

            // alignItems: 'space-between',
          }}>
          <TouchableOpacity
            style={[styles.buttonStyleGray, {width: '47%', marginTop: 40}]}
            onPress={() => {
              props.navigation.navigate('ProductDetail');
            }}>
            <View>
              <Text style={[styles.text_color, {color: '#DDDDDD'}]}>
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonStyleRed, {width: '47%', marginTop: 40}]}
            onPress={() => {
              props.navigation.navigate('ProductDetail');
            }}>
            <View>
              <Text style={styles.text_color}>I'm Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    // <ScrollView>
    <View style={styles.screen}>
      <View style={{backgroundColor: '#FFFFFF', width: '100%'}}>
        <FlatList
          style={{marginLeft: 8, marginRight: 8}}
          numColumns={3}
          showsVerticalScrollIndicator="false"
          data={ADDINGRIDIENTS}
          renderItem={renderCategoryGridItem}
          ListHeaderComponent={Header}
          ListFooterComponent={getFooter}
        />
      </View>
    </View>
    // </ScrollView>
  );
};
AddIngrieidientsScreen.navigationOptions = navigationData => {
  const prodId = navigationData.navigation.getParam('productId');
  const selectedProduct = PRODUCTS.find(product => product.id === prodId);
  return {
    headerTitle: <Text style={MainStyles.headerTitle}> </Text>,
    headerLeft: null,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  menuItem: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 15,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontSize: 15,
    alignSelf: 'flex-start',
    // marginTop: 5,
    marginBottom: 8,
    lineHeight: 16.58,
  },
  textTitle: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 22,
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontSize: 18,
    alignSelf: 'flex-start',
    textAlign: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    marginBottom: 10,
    lineHeight: 20,
  },
  productItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // overflow: 'hidden',
    // margin: 20,
    borderColor: Colors.primaryColor,
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  descText: {
    color: '#2B2C2D',
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Gotham',
  },
  buttonStyleRed: {
    backgroundColor: Colors.primaryColor,
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    // marginLeft: 15,
    // marginRight: 15,
    marginBottom: 25,
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 10,
    lineHeight: 17.23,
    fontFamily: 'Gotham',
    fontWeight: '500',
  },
  buttonStyleGray: {
    backgroundColor: '#FFFFFF',
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    color: '#000000',
    marginBottom: -25,
    justifyContent: 'center',
    color: '#000000',
    fontFamily: 'Gotham',
    fontWeight: '500',
  },
  text_color: {
    color: '#FFFFFF',
    fontFamily: 'Gotham',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default AddIngrieidientsScreen;
