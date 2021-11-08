import React from 'react';
import {
  FlatList,
  StyleSheet,
  AppRegistry,
  Text,
  Image,
  View,
} from 'react-native';

import ServiceGridTile from '../components/ServiceGridTile';
import {SERVICES} from '../data/dummy-data.js';
import MainStyle from '../src/styleSheet/MainStyle';
import HeaderRight from '../components/HeaderRight';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = props => {
  renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        height: 350,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
      }}>
      <Text>
        In order to close the modal, you can swipe it down, touch the area
        outside it or press the back button.
      </Text>
    </View>
  );
  const renderServiceGridItem = itemData => {
    return (
      <ServiceGridTile
        title={itemData.item.title}
        menuImage={itemData.item.image}
        selectedImage={itemData.item.activeImage}
        menuIndex={itemData.item.id}
        onSelect={() => {
          props.navigation.navigate('Main', {
            serviceId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={MainStyle.mainBody}>
      <View style={MainStyle.wrapperView}>
        <FlatList
          style={{marginTop: 10}}
          numColumns={2}
          data={SERVICES}
          renderItem={renderServiceGridItem}
        />
      </View>
    </View>
  );
};
HomeScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}></Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/smallLogo.png')}
      style={{width: 135, height: 30, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
  headerRight: props => <HeaderRight props={useNavigation} />,
};

export default HomeScreen;
