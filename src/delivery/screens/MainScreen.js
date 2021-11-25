import React from 'react';
import BannerSlider from '../../components/BannerSlider';
import MainStyle from '../../styleSheet/MainStyle';
import HeaderRight from '../../components/HeaderRight';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {CATEGORIES, SERVICES, CUISINES} from '../../data/dummy-data';
const images = [
  require('../../images/banner.png'),
  require('../../images/banner.png'),
];
const MainScreen = (props) => {
  // const selectedService = SERVICES.find(service => service.id === serviceId);
  const Header = () => {
    return (
      <View>
        <HeaderRight navigation={props} />
        <FlatList
          numColumns={5}
          data={CUISINES}
          renderItem={renderCuisinesItem}
        />
        <View style={styles.container}>
          <BannerSlider images={images} />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.headingDesc}>Top Choices</Text>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', margin: 10}}>
        <Text style={[styles.headingDesc, {marginTop: 10, marginBottom: 15}]}>
          Today's Pick
        </Text>
        <Image
          style={{
            justifyContent: 'flex-end',
            width: '94%',
            borderRadius: 20,
            alignSelf: 'center',
          }}
          source={require('../../images/banner.png')}
        />
      </View>
    );
  };

  const renderCategoryGridItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Category', {categoryId: itemData.item.id})
        }>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={{
              justifyContent: 'flex-end',
              width: 70,
              height: 70,
              alignSelf: 'center',
              marginLeft: 15,
              marginRight: 9,
              marginTop: 10,
              marginBottom: 8,
            }}
            source={require('../../images/menuItem.png')}
          />
          <Text
            style={{
              alignContent: 'center',
              fontSize: 12,
              color: '#2B2C2D',
              fontWeight: '500',
              fontFamily: 'Gotham',
              marginTop: -5,
            }}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCuisinesItem = items => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          borderColor: '#DDDDDD',
          borderWidth: 1,
          borderRadius: 12,
          height: 34,
          marginLeft: 16,
          marginTop: 5,
          marginBottom: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            height: 34,
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={MainStyle.wrapperView}>
        <View
          style={{
            width: Dimensions.get('window').width,
          }}>
          <FlatList
            numColumns={4}
            scrollEnabled={false}
            data={CATEGORIES}
            ListHeaderComponent={Header}
            ListFooterComponent={Footer}
            renderItem={renderCategoryGridItem}
          />
        </View>
      </View>
    </View>
  );
};
// MainScreen.navigationOptions = {
//   headerTitle: <Text style={MainStyle.headerTitle}></Text>,
//   headerBackImage: (
//     <Image
//       source={require('../../images/smallLogo.png')}
//       style={{width: 135, height: 30, marginLeft: 17, resizeMode: 'contain'}}
//     />
//   ),
//   headerBackTitleVisible: false,
//   headerRight: () => <HeaderRight />,
// };
MainScreen.navigationOptions = {title: 'Welcome', headerShown: false};
export default MainScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  headingDesc: {
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontWeight: '500',
    fontSize: 18,
    width: '100%',
    alignSelf: 'flex-start',
    marginLeft: 18,
    marginTop: 15,
  },

  container: {
    marginLeft: 16,
    marginBottom: -5,
    marginTop: 10,
  },
});
