import React from 'react';
import BannerSlider from '../components/BannerSlider';
import MainStyle from '../src/styleSheet/MainStyle';
import HeaderRight from '../components/HeaderRight';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import {CATEGORIES, SERVICES, CUISINES} from '../data/dummy-data';
const images = [
  require('../src/images/banner.png'),
  require('../src/images/banner.png'),
];
const MainScreen = props => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderTopColor: '#DDDDDD',
        borderRadius: 20,
        borderTopWidth: 2,
      }}>
      <Image
        style={{height: '100%', width: '100%'}}
        source={require('../src/images/filterbg.png')}
      />
    </View>
  );
  const sheetRef = React.useRef(null);
  fall = new Animated.Value(1);

  const serviceId = props.navigation.getParam('serviceId');
  const selectedService = SERVICES.find(service => service.id === serviceId);
  const renderCategoryGridItem = itemData => {
    return (
      <TouchableOpacity
        // style={styles.menuItem}
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
            source={require('../src/images/menuItem.png')}
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
          // marginRight: 16,
          marginLeft: 16,
          marginTop: 5,
          marginBottom: 5,
        }}
        onPress={() => sheetRef.current.snapTo(0)}>
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
    <>
      <ScrollView>
        <View style={styles.screen}>
          <View style={MainStyle.wrapperView}>
            <View
              style={{
                width: Dimensions.get('window').width,
              }}>
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
              {/* <Text>{selectedService.title}</Text> */}
              <FlatList
                numColumns={4}
                scrollEnabled={false}
                data={CATEGORIES}
                renderItem={renderCategoryGridItem}
              />
              <View style={{flex: 1, alignItems: 'center', margin: 10}}>
                <Text
                  style={[
                    styles.headingDesc,
                    {marginTop: 10, marginBottom: 15},
                  ]}>
                  Today's Pick
                </Text>
                <Image
                  style={{
                    justifyContent: 'flex-end',
                    width: '94%',
                    // height: 80,
                    borderRadius: 20,
                    alignSelf: 'center',
                    // margin: 8,
                  }}
                  source={require('../src/images/banner.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[650, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};
MainScreen.navigationOptions = {
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
