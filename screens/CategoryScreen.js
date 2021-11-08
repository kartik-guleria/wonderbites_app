import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {CATEGORIES, PRODUCTS, CUISINES} from '../data/dummy-data';
import ProductGridTile from '../components/ProductGridTile';
import MainStyle from '../src/styleSheet/MainStyle';
import HeaderRight from '../components/HeaderRight';

const CategoryScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeal = PRODUCTS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  const selectedCategory = CATEGORIES.find(category => category.id === catId);
  const renderProductGridItem = itemData => {
    return (
      <ProductGridTile
        title={itemData.item.title}
        rating={itemData.item.rating}
        image={itemData.item.image}
        kcal={itemData.item.kcal}
        onSelect={() => {
          props.navigation.navigate('ProductDetail', {
            productId: itemData.item.id,
          });
        }}
      />
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
          borderColor: '#DDDDDD',
          borderWidth: 1,
          borderRadius: 12,
          height: 34,
          marginLeft: 16,
          marginTop: 8,
          marginBottom: 8,
        }}>
        <Text
          style={{
            alignContent: 'center',
            fontSize: 12,
            color: '#2B2C2D',
            fontWeight: '500',
            fontFamily: 'Gotham',
          }}>
          {items.item.title}
        </Text>
      </View>
      // </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <View style={MainStyle.wrapperView}>
        <View
          style={{
            width: Dimensions.get('window').width,
            backgroundColor: '#FFFFFF',
          }}>
          <FlatList
            numColumns={5}
            data={CUISINES}
            renderItem={renderCuisinesItem}
          />
        </View>
        <FlatList
          style={{width: '100%', backgroundColor: '#FFFFFF'}}
          numColumns={1}
          data={displayedMeal}
          renderItem={renderProductGridItem}
        />
      </View>
    </View>
  );
};

// CategoryScreen.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');
//   const selectedCategory = CATEGORIES.find(category => category.id === catId);
//   return {
//     headerTitle: selectedCategory.title,
//   };
// };

export default CategoryScreen;
CategoryScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}></Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/smallLogo.png')}
      style={{width: 135, height: 30, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
  headerRight: () => <HeaderRight />,
};
//Not Working Start
// CategoryScreen.naviagtionOptions = navigationData => {
//   console.log(navigationData);
//   const categoryId = navigationData.navigation.getParam('categoryId');
//   const selectedCategory = CATEGORIES.find(
//     category => category.id === categoryId,
//   );
//   return {
//     headerTitle: selectedCategory.title,
//     headerStyle: {
//       backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
//     },
//     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
//   };
// };

// CategoryScreen.navigationOptions = {
//   headerTitle: 'Categoryr Screen',
// };
// Not Working END
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    // width: Dimensions.get('window').width,
  },
});
