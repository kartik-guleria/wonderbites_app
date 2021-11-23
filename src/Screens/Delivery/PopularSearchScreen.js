import React from 'react';
import BannerSlider from '../../components/BannerSlider';
import MainStyle from '../../styleSheet/MainStyle';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import SEARCHRESULT from '../../data/dummy-data';
import SearchBox from '../../components/SearchBox';
const images = [
  require('../../images/banner.png'),
  require('../../images/banner.png'),
  require('../../images/banner.png'),
  require('../../images/banner.png'),
];
const PopularSearchScreen = props => {
  const Header = () => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.headingDesc}>Popular Searches</Text>
      </View>
    );
  };
  const getFooter = () => {
    return (
      <View>
        <View></View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.headingDesc}>Offers for you</Text>
        </View>
        <View style={styles.container}>
          <BannerSlider images={images} />
        </View>
      </View>
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
          // marginRight: 16,
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
            // margin: 5,
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
            numColumns={3}
            data={SEARCHRESULT}
            renderItem={renderCuisinesItem}
            ListHeaderComponent={Header}
            ListFooterComponent={getFooter}
          />
        </View>
      </View>
    </View>
  );
};
PopularSearchScreen.navigationOptions = {
  headerTitle: <SearchBox />,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};

export default PopularSearchScreen;
const styles = StyleSheet.create({
  screen: {
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
