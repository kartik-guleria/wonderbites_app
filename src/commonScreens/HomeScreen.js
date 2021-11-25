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
import {SERVICES} from '../data/dummy-data';
import MainStyle from '../styleSheet/MainStyle';
import HeaderRight from '../components/HeaderRight';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = props => {
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
        <HeaderRight navigation={props} />

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
HomeScreen.navigationOptions = {title: 'Welcome', headerShown: false};

export default HomeScreen;