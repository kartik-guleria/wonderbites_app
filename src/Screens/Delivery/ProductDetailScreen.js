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
import ImageSlider from '../../components/ImageSlider';
import {INGRIDIENTS, PRODUCTS} from '../../data/dummy-data';
import Colors from '../../constants/Colors';
import UnderlineView from '../../components/underlineView';
import MainStyle from '../../styleSheet/MainStyle';
import HeaderRight from '../../components/HeaderRight';

const ProductDetailScreen = props => {
  const prodId = props.navigation.getParam('productId');
  const selectedProduct = PRODUCTS.find(product => product.id === prodId);
  const images = [
    require('../../images/noodle.png'),
    require('../../images/noodle.png'),
    require('../../images/noodle.png'),
    require('../../images/noodle.png'),
  ];
  const renderCategoryGridItem = itemData => {
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
          width: Dimensions.get('window').width / 3 - 20,
          height: Dimensions.get('window').width / 3 - 20,
          margin: 8,
          borderRadius: 5,
          backgroundColor: '#F2F3F0',
          shadowColor: 'black',
          shadowOpacity: 0.25,
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 2,
          elevation: 1,
        }}>
        <Image
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            resizeMode: 'contain',
            width: 60,
            height: 45,
            margin: 10,
          }}
          source={require('../../images/ingr2.png')}
        />
        <Text style={MainStyle.itemTitle}>{itemData.item.title}</Text>
      </View>
      // </TouchableOpacity>
    );
  };

  const Header = () => {
    return (
      <View>
        <View style={{height: 300, marginLeft: -20, marginRight: -20}}>
          <ImageSlider images={images} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={MainStyle.textTitle}>{selectedProduct.title}</Text>
          <Text style={[MainStyle.textTitle, {color: Colors.primaryColor}]}>
            500ALL
          </Text>
        </View>
        <Text
          style={[
            MainStyle.inputPhone,
            {
              color: '#C4C4C4',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            },
          ]}>
          375 Kcal
        </Text>
        <Text
          style={[
            MainStyle.descTextLight,
            {
              padding: 14,
              paddingBottom: 0,

              textAlign: 'left',
            },
          ]}>
          Chicken, pork, shrimps, honey, soy souce toasted sesame oil, chilli,
          ramen, brown sugar, honey roasted,
        </Text>
        <UnderlineView />
        <Text style={[MainStyle.textTitle, {fontSize: 15, marginTop: 0}]}>
          INGRIDIENTS 
        </Text>
      </View>
    );
  };
  const getFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 50,
          justifyContent: 'space-between',
          width: '95%',
          marginTop: 10,
          marginLeft: 10,
          borderTopColor: '#dddddd',
          borderTopWidth: 1,
        }}>
        {/* <UnderlineView /> */}
        <TouchableOpacity
          style={[styles.buttonStyleGray, {width: '45%', marginTop: 40}]}
          onPress={() => {
            props.navigation.navigate('AddIngrieidients', {
              productId: selectedProduct.id,
            });
          }}>
          <View>
            <Text style={[styles.text_color, {color: '#DDDDDD'}]}>Modify</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyleRed, {width: '45%', marginTop: 40}]}
          onPress={() => {
            props.navigation.navigate('Confirmation');
          }}>
          <View>
            <Text style={styles.text_color}>Add To Bag</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <FlatList
          style={{marginLeft: 6, marginRight: 6, marginTop: 20}}
          numColumns={3}
          data={INGRIDIENTS}
          showsVerticalScrollIndicator="false"
          renderItem={renderCategoryGridItem}
          ListHeaderComponent={Header}
          ListFooterComponent={getFooter}
        />
      </View>
    </View>
  );
};

ProductDetailScreen.navigationOptions = navigationData => {
  const prodId = navigationData.navigation.getParam('productId');
  const selectedProduct = PRODUCTS.find(product => product.id === prodId);
  return {
    headerTitle: selectedProduct.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favourite');
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default ProductDetailScreen;
// ProductDetailScreen.navigationOptions = {
//   headerTitle: <Text style={MainStyle.headerTitle}> </Text>,
//   headerBackImage: (
//     <Image
//       source={require('../../images/cross-black.png')}
//       style={{width: 30, height: 30, marginLeft: 16, resizeMode: 'contain'}}
//     />
//   ),
//   headerBackTitleVisible: false,
//   headerRight: (
//     <Image
//       source={require('../../images/share.png')}
//       style={{width: 22, height: 24, marginRight: 16, resizeMode: 'contain'}}
//     />
//   ),
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  menuItem: {},

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
    color: '#000000',
    // marginLeft: 10,
    // marginRight: 10,
    fontSize: 16,
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
    fontFamily: 'Gotham-Bold',
  },
  buttonStyleGray: {
    backgroundColor: '#FFFFFF',
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    // marginLeft: 15,
    // marginRight: 15,
    // marginTop: 40,
    marginBottom: -25,
    justifyContent: 'center',
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Gotham-Bold',
  },
  text_color: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
