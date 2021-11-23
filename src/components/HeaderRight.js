import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const headerRight = props => {
  console.log(props);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={require('../images/Loc-Black.png')}
        style={{width: 17, height: 21, marginLeft: 20, resizeMode: 'contain'}}
      />
      <Text>{props.title}</Text>
      <Image
        source={require('../images/glass.png')}
        style={{width: 20, height: 20, marginLeft: 20, resizeMode: 'contain'}}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Image
          source={require('../images/profileIcon.png')}
          style={{
            width: 28,
            height: 28,
            marginLeft: 15,
            marginRight: 15,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default headerRight;
